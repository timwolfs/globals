import type { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <section className="container py-8 lg:py-20 xl:py-32">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-4 gap-y-8">
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 lg:col-end-10">
          <PrismicRichText field={slice.primary.content} components={components} />
        </div>
      </div>
    </section>
  );
}
