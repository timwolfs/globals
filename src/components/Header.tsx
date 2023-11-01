'use client'

import { Navigation } from "@/components/Navigation";
import { motion, useScroll } from "framer-motion";

export interface HeaderProps {
  navigation: any;
}

const Header = ({ navigation }: HeaderProps) => {
  const { scrollYProgress } = useScroll();

  return (
    <header className="text-primary px-6 py-7 w-full fixed bg-secondary z-10 top-0">
      <div className="flex flex-col items-center">
        <Navigation navigation={navigation} />
      </div>
      <motion.div style={{ scaleX: scrollYProgress }} className="absolute bottom-0 left-0 right-0 bg-primary h-1.5 origin-left bg-gradient-to-tr from-primary to-tertiary" />
    </header>
  )
}

export default Header;
