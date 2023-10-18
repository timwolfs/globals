import { Navigation } from "@/components/Navigation";

export interface HeaderProps {
  navigation: any;
}

const Header = ({ navigation }: HeaderProps) => {
  return (
    <header className="text-primary p-8 w-full flex flex-col items-center">
      <Navigation navigation={navigation} />
    </header>
  )
}

export default Header;
