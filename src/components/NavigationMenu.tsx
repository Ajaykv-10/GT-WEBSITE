'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { navigationMenuItems } from '@/constants/navigationMenuItems';

export const NavigationMenu = () => {
  const pathName = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <nav className="flex gap-1 h-full ">
      {navigationMenuItems.map((item, index) => {
        const isActive = item.path === pathName;
        return (

          <div
            key={item.label}
            className={`hover:bg-primaryColor-500 ${isActive && 'bg-primaryColor-500'} h-full cursor-pointer flex items-center relative `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={item.path}><span className="font-semibold p-1">{item.label.toUpperCase()}</span></Link>
            {hoveredIndex === index && item.group?.length !== 0
              && (
                <div className="absolute left-0 top-full  max-w-screen max-h-screen  bg-amber-50 z-3 border border-amber-300 ">
                  <div className="flex ">
                    {item.group.map((link) => {
                      return (
                        <div key={link.key} className="">
                          {link.isHeading && <p className=" text-xs p-1 font-bold border-b border-b-gray-200">{link.heading}</p>}
                          <ul className={`whitespace-nowrap ${link.isHeading ? 'list-disc list-inside' : 'divide-y divide-gray-200 '} `}>{link.links.map(subLink => <li key={subLink.path} className="text-xs hover:bg-primaryColor-500  p-1 ">{subLink.label}</li>)}</ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
          </div>

        );
      })}
    </nav>
  );
};
