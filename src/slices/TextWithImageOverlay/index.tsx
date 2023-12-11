import { Content } from "@prismicio/client";
import { 
  SliceComponentProps,
  PrismicRichText 
} from "@prismicio/react";
import Image from "next/image";
import cn from "classnames";

/**
 * Props for `TextWithImageOverlay`.
 */
export type TextWithImageOverlayProps =
  SliceComponentProps<Content.TextWithImageOverlaySlice>;

/**
 * Component for "TextWithImageOverlay" Slices.
 */
const TextWithImageOverlay = ({
  slice,
}: TextWithImageOverlayProps): JSX.Element => {
  return (
    <section className="py-8 lg:pt-0 lg:pb-20 xl:pb-32 lg:mt-[7vw]">
      <div className="grid grid-cols-4 lg:grid-cols-12">
        <div className="lg:order-1 order-0 col-span-4 lg:col-span-5">
          <div className="p-8 xl:p-12 transfrom lg:-translate-y-[7vw] lg:-translate-x-[8vw] bg-secondary lg:rounded-tr-3xl lg:rounded-bl-3xl lg:shadow-2xl">
          <PrismicRichText field={slice.primary.text} />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-6 lg:col-start-2">
          <figure className="relative w-full h-full aspect-[3/2] lg:rounded-tl-3xl lg:rounded-br-3xl overflow-hidden">
            <Image
              className="object-cover"
              src={slice.primary.image.url as string}
              alt={slice.primary.image.alt || ''}
              fill={true}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default TextWithImageOverlay;
