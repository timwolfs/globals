'use client'

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

/**
 * Props for `HeaderTerminal`.
 */
export type HeaderTerminalProps =
  SliceComponentProps<Content.HeaderTerminalSlice>;

/**
 * Component for "HeaderTerminal" Slices.
 */
const HeaderTerminal = ({ slice }: HeaderTerminalProps): JSX.Element => {
  const [formattedDateTime, setFormattedDateTime] = useState('...');
  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }
    }
  };
  const textIndex = useMotionValue(0);
  const texts = [
    "I am a front-end developer with 6 years of experience",
    "Living in the greatest city, Rotterdam!",
    "Experience with javascript (React, Next.js and typescript)",
    "html, css (tailwindcss, scss and BEM)",
    "I know some stuff like Drupal CMS, Prismic.io headless CMS",
    "and also Drupal headless CMS in combination with Next.js",
    "Fetching the data with JSON api or GraphQL"
  ];
  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const formattedDateTime = now.toLocaleString('en-GB', options);
      setFormattedDateTime(formattedDateTime);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    animate(count, 70, {
      type: "tween",
      duration: 2.5,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="container bg-primary py-10 lg:py-32 overflow-hidden">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute w-full h-full bg-black opacity-20 transform -translate-x-16 translate-y-16 rounded-md" />
        <div className="relative w-full shadow-2xl subpixel-antialiased overflow-hidden rounded-md h-64 bg-black border-black mx-auto">
          <div className="flex items-center h-6 bg-gray-100 border-b border-gray-500 text-center text-black">
            <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" />
            <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" />
            <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" />
            <div className="mx-auto pr-16">
              <p className="text-center text-sm">tim.wolfs</p>
            </div>
          </div>
          <div className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black">
            <p className="pb-1">Current date: {formattedDateTime} on ttys007</p>
            <p className="pb-1">tim.wolfs@MAC-L33T ~ % Hello World! <br />
              <motion.span>{displayText}</motion.span>
              <motion.span
                variants={cursorVariants}
                animate="blinking"
                className="inline-block h-5 w-2 translate-y-1 ml-1 bg-green-200"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderTerminal;
