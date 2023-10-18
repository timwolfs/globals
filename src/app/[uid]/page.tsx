import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { Navigation } from "@/components/Navigation";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params, header: any, footer: any }) {
  const client = createClient();
  const [header, footer] = await Promise.all([
    client.getByUID("navigation", "main-menu"),
    client.getByUID("navigation", "footer"),
  ]);
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return (
    <main className="space-y-8">
      <header className="p-8">
        <Navigation navigation={header} />
      </header>
      <SliceZone slices={page.data.slices} components={components} />
      <footer className="p-8">
        <Navigation navigation={footer} />
      </footer>
    </main>
  )
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("page", {
    predicates: [prismic.filter.not("my.page.uid", "home")],
  });

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
