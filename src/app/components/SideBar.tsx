'use client';
import { IoMenu } from 'react-icons/io5';
import usesideNavStore from '../store/navigationMenuStore';

export default function SideBar() {
  const { openToggle } = usesideNavStore();
  // const [toggle, setToggle] = useState(false);
  return <><IoMenu className="block md:hidden font-bold text-4xl" onClick={() => openToggle()} /></>;
}
