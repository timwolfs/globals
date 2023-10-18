import { PrismicNextLink } from "@prismicio/next";

export interface ButtonProps {
  label: string | null;
  url: any;
}

const Button = ({ label, url }: ButtonProps) => {
  return (
    <PrismicNextLink href={url} className="px-8 py-3 border-2 border-primary no-underline font-semibold hover:bg-primary hover:text-white">
      {label}
    </PrismicNextLink>
  );
};

export default Button;
