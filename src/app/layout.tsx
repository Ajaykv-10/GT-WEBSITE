import { NavigationModal } from '@/components/NavigationModal';
import '@/styles/global.css';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>

      <NavigationModal />

      <section>{children}</section>
    </>
  );
}
