'use client'

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useState } from 'react';

/**
 * Props for `HeaderTerminal`.
 */
export type HeaderTerminalProps =
  SliceComponentProps<Content.HeaderTerminalSlice>;

/**
 * Component for "HeaderTerminal" Slices.
 */
const HeaderTerminal = ({ slice }: HeaderTerminalProps): JSX.Element => {
  const [formattedDateTime, setFormattedDateTime] = useState('Loading...');

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

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="container bg-primary py-10 lg:py-32 overflow-hidden">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-4">
        <div className="relative col-span-4 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4">
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
              <p className="pb-1">Last login: {formattedDateTime} on ttys073</p>
              <p className="pb-1">tim.wolfs@MAC-L33T ~ % Hello world! []</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderTerminal;
