import { Navigation } from "@/components/Navigation";

export interface FooterProps {
  navigation: any;
}

const Footer = ({ navigation }: FooterProps) => {
  return (
    <footer className="p-8 bg-gradient-to-tr from-primary to-tertiary text-white">
      <Navigation navigation={navigation} />
    </footer>
  )
}

export default Footer;
