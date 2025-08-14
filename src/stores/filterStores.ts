import { create } from "zustand";
import type { filterType } from "../constants/appTypes";

type filterStoreType = {
  appliedFilters: filterType[] | null;
};
export const useFiltersStore = create<filterStoreType>(() => ({
  appliedFilters: null,
}));

export const setFiltersStore = (filter: filterType) =>
  useFiltersStore.setState((state) => ({
    ...state,
    appliedFilters: [...(state.appliedFilters ?? []), filter],
  }));
