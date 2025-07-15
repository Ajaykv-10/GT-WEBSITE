import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex gap-4 bg-black p-4 text-start text-sm">
        <a href="https://www.facebook.com/gtholidays/" target="_blank" rel="nofollow noreferrer " className="text-primaryColor-500"><FaFacebookF className="text-2xl " /></a>
        <a href="https://www.instagram.com/gtholidays.in/" target="_blank" rel="nofollow noreferrer" className="text-primaryColor-500"><FaInstagram className="text-2xl " /></a>
        <div className="h-auto w-2 border-r-1 border-sky-900"></div>
        <a href="mailto:mail@gtholidays.in" className="text-gray-100">mail@gtholidays.in</a>
      </div>
      <section>{children}</section>
    </>
  );
}
