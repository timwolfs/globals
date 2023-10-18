import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { Navigation } from "@/components/Navigation";
/**
 * This component renders your homepage.
 *
 * Use Next's generateMetadata function to render page metadata.
 *
 * Use the SliceZone to render the content of the page.
 */

export async function generateMetadata({ header, footer }: any): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image.url || "",
        },
      ],
    },
    props: {
      header,
      footer,
    },
  };
}

export default async function Index() {
  /**
   * The client queries content from the Prismic API
   */
  const client = createClient();
  const [header, footer] = await Promise.all([
    client.getByUID("navigation", "main-menu"),
    client.getByUID("navigation", "footer"),
  ]);
  const home = await client.getByUID("page", "home");

  return (
    <main className="space-y-8">
      <header className="p-8">
        <Navigation navigation={header} />
      </header>
      <SliceZone slices={home.data.slices} components={components} />
      <footer className="p-8">
        <Navigation navigation={footer} />
      </footer>
    </main>
  )
}
