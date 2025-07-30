import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { navigationMenuItems } from '@/constants/navigationMenu';
import SideBar from './components/SideBar';

export default function GlobalTemplate({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="flex gap-4 bg-black p-4 text-start text-sm">
          <a href="https://www.facebook.com/gtholidays/" target="_blank" rel="nofollow noreferrer " className="text-primaryColor-500"><FaFacebookF className="text-2xl " /></a>
          <a href="https://www.instagram.com/gtholidays.in/" target="_blank" rel="nofollow noreferrer" className="text-primaryColor-500"><FaInstagram className="text-2xl " /></a>
          <div className="h-auto w-2 border-r-1 border-sky-900"></div>
          <a href="mailto:mail@gtholidays.in" className="text-gray-100">mail@gtholidays.in</a>
        </header>
        <div className="flex sticky top-0 z-100 h-20 bg-white gap-3 justify-between items-center">
          <SideBar />
          <Image src="/assets/images/GT-Holidays-Logo.jpg" alt="GT Logo" width={170} height={70} />
          <div className="hidden md:block h-full ">
            <nav className="flex gap-4 h-full">{navigationMenuItems.map(item => <div key={item.label} className="hover:bg-primaryColor-500 h-full   flex items-center "><Link href={item.path}><span className="font-semibold">{item.label.toUpperCase()}</span></Link></div>)}</nav>
          </div>
        </div>
        {children}

        <footer className="border-t border-gray-300 py-8 text-start text-sm">
          {`Copyright @ ${new Date().getFullYear()} by GT Holidays Pvt Ltd. All Rights Reserved.`}
        </footer>
      </body>
    </html>
  );
}
