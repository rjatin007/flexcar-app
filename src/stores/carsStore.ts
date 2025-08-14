import { create } from "zustand";
import type { carsType } from "../constants/appTypes";

export const useCarsStore = create<{ cars: carsType | null }>(() => ({
  cars: null,
}));

export const setCarsStore = (cars: carsType) =>
  useCarsStore.setState((state) => ({
    ...state,
    cars,
  }));
