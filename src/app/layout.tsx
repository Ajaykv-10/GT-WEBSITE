import Image from 'next/image';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { NavigationMenu } from '@/components/NavigationMenu';
import { NavigationModal } from '@/components/NavigationModal';
import SideBar from './components/SideBar';
import '@/styles/global.css';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <title>Gt Holidays</title>
        <body>
          <header className="flex gap-4 bg-black p-4 text-start text-sm">
            <a href="https://www.facebook.com/gtholidays/" target="_blank" rel="nofollow noreferrer " className="text-primaryColor-500"><FaFacebookF className="text-2xl " /></a>
            <a href="https://www.instagram.com/gtholidays.in/" target="_blank" rel="nofollow noreferrer" className="text-primaryColor-500"><FaInstagram className="text-2xl " /></a>
            <div className="h-auto w-2 border-r-1 border-sky-900"></div>
            <a href="mailto:mail@gtholidays.in" className="text-gray-100">mail@gtholidays.in</a>
          </header>
          <main>
            <NavigationModal />
            <div className="flex sticky top-0 z-100 h-20 bg-white gap-3 px-4 justify-between md:justify-start  items-center">
              <SideBar />
              <Image src="/assets/images/GT-Holidays-Logo.jpg" alt="GT Logo" width={170} height={70} />
              <div className="hidden md:block h-full mx-auto">
                <NavigationMenu />

              </div>
            </div>

            {children}
          </main>
          <footer className="border-t border-gray-300 py-8 text-start text-sm">
            {`Copyright @ ${new Date().getFullYear()} by GT Holidays Pvt Ltd. All Rights Reserved.`}
          </footer>
        </body>
      </html>
    </>
  );
}
