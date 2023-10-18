import { Navigation } from "@/components/Navigation";

export interface HeaderProps {
  navigation: any;
}

const Header = ({ navigation }: HeaderProps) => {
  return (
    <header className="p-8">
      <Navigation navigation={navigation} />
    </header>
  )
}

export default Header;
