import { Content } from "@prismicio/client";
import { 
  SliceComponentProps,
  PrismicRichText 
} from "@prismicio/react";
import Image from "next/image";
import Button from "@/components/Button";
import cn from "classnames";

export type TextWithImageProps = SliceComponentProps<Content.TextWithImageSlice>;

const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8">
        <div className={cn(slice.primary.text_right ? "lg:order-1":"order-0 pt-8 lg:pt-0", "col-span-4 lg:col-span-6")}>
          <div className="h-full flex flex-col justify-center items-start px-6 lg:p-20 xl:p-32 2xl:p-40">
            <PrismicRichText field={slice.primary.text} />
            {slice.primary.button.url && (
              <Button 
                label={slice.primary.button_text}
                url={slice.primary.button.url}
              />
            )}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-6">
          <figure className="relative w-full h-full aspect-square">
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

export default TextWithImage;
