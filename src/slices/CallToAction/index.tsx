import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Button from "@/components/Button";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <section className="container relative before:w-full before:h-full before:absolute before:bg-gradient-to-tr before:from-gray-600 before:to-black before:content-[attr(before)] before:left-0 before:top-0 before:opacity-80">
      <Image
        className="object-cover absolute w-full h-full -z-10"
        src={slice.primary.background_image.url as string}
        alt={slice.primary.background_image.alt || ''}
        fill={true}
      />
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-4 gap-y-8 relative text-white">
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 lg:col-end-10">
          <div className="py-20 lg:py-40 flex flex-col items-center">
            <h2 className="mb-8">{slice.primary.title}</h2>
            {slice.primary.button_url.url && (
              <Button 
                label={slice.primary.button_text}
                url={slice.primary.button_url.url}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
