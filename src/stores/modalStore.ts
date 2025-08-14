import { create } from "zustand";

export const useModalStore = create<{ isModalOpen: boolean }>(() => ({
  isModalOpen: false,
}));

export const setModalOpen = (isModalOpen: boolean) =>
  useModalStore.setState((state) => ({ ...state, isModalOpen }));
