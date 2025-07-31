'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { navigationMenuItems } from '@/constants/navigationMenuItems';

export const NavigationMenu = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-1 h-full ">
      {navigationMenuItems.map((item) => {
        const isActive = item.path === pathName;
        return <div key={item.label} className={`hover:bg-primaryColor-500 ${isActive && 'bg-primaryColor-500'} h-full cursor-pointer flex items-center `}><Link href={item.path}><span className="font-semibold p-1">{item.label.toUpperCase()}</span></Link></div>;
      })}
    </nav>
  );
};
