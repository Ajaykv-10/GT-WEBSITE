import { create } from 'zustand';

export type NavStore = {
  isOpen: boolean;
  openToggle: () => void;
  closeToggle: () => void;
};
const usesideNavStore = create<NavStore>(set => ({
  isOpen: false,
  openToggle: () => set({ isOpen: true }),
  closeToggle: () => set({ isOpen: false }),
}));
export default usesideNavStore;
