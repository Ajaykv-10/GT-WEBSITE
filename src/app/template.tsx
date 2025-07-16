import Image from 'next/image';

import Link from 'next/link';
import { navigationMenuItems } from '@/constants/navigationMenu';

export default function GlobalTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex p-4 gap-3 justify-around items-center">
        <Image src="/assets/images/GT-Holidays-Logo.jpg" alt="GT Logo" width={170} height={70} />
        <nav className="flex gap-4 items-center">{navigationMenuItems.map(item => <Link key={item.label} className="hover:bg-primaryColor-500 h-full" href={item.path}><span className="font-semibold">{item.label.toUpperCase()}</span></Link>)}</nav>

      </div>
      {children}
    </>
  );
}
