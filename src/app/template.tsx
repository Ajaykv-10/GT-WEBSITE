import Image from 'next/image';

import Link from 'next/link';
import { navigationMenuItems } from '@/constants/navigationMenu';
import SideBar from './components/SideBar';

export default function GlobalTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex  p-4 gap-3 justify-between items-center">
        <SideBar />
        <Image src="/assets/images/GT-Holidays-Logo.jpg" alt="GT Logo" width={170} height={70} />
        <div className="hidden md:block">

          <nav className="flex gap-4 items-center ">{navigationMenuItems.map(item => <Link key={item.label} className="hover:bg-primaryColor-500 h-full hidden md:block" href={item.path}><span className="font-semibold">{item.label.toUpperCase()}</span></Link>)}</nav>
        </div>
      </div>
      {children}
    </>
  );
}
