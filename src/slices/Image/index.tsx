import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ImageComponent from "next/image";
/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <section className="container">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-4 gap-y-8">
        <div className="col-span-4 lg:col-span-8 lg:col-start-3 lg:col-end-11">
          <figure className="relative w-full h-full aspect-video">
            <ImageComponent
              className="object-cover"
              src={slice.primary.image.url}
              alt={slice.primary.image.alt}
              fill={true}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Image;
