import { PrismicNextLink } from "@prismicio/next";

export interface ButtonProps {
  label: string | null;
  url: any;
}

const Button = ({ label, url }: ButtonProps) => {
  return (
    <div className="button relative group">
      <div className="pointer-events-none absolute w-full h-full bg-primary transition-transform opacity-50 transform group-hover:-translate-x-2.5 group-hover:translate-y-2.5" />
      <PrismicNextLink href={url} className="relative block px-8 py-3 border-2 border-primary no-underline font-semibold bg-white hover:bg-primary hover:text-white">
        {label}
      </PrismicNextLink>
    </div>
  );
};

export default Button;
