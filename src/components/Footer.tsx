import { Navigation } from "@/components/Navigation";

export interface FooterProps {
  navigation: any;
}

const Footer = ({ navigation }: FooterProps) => {
  return (
    <footer className="p-8 bg-secondary">
      <Navigation navigation={navigation} />
    </footer>
  )
}

export default Footer;
