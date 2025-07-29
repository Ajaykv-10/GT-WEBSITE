'use client';
import { IoClose } from 'react-icons/io5';

import usesideNavStore from '@/app/store/navigationMenuStore';
import Modal from './Modal';

export const NavigationModal = () => {
  const { isOpen, closeToggle } = usesideNavStore();
  function handleClose() {
    closeToggle();
  }
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="w-1/4 h-screen  left-0 top-0 bg-white backdrop-blur-lg fixed z-10">
        <IoClose className="absolute right-1 top-5 text-2xl text-black cursor-pointer " onClick={handleClose} />

        <ul className="flex flex-col gap-3">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </Modal>
  );
};
