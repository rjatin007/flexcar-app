import type { filterType } from "./appTypes";

export const filtersType = {
  SELECTOR: "SELECTOR",
  CHECKBOX: "CHECKBOX",
};

export const filters: filterType[] = [
  {
    id: 1,
    label: "Monthly Price",
    filterName: "price",
    filterType: filtersType.SELECTOR,
  },
  {
    id: 2,
    label: "Body Type",
    filterName: "bodytype",
    filterType: filtersType.CHECKBOX,
  },
  {
    id: 3,
    label: "Make & Model",
    filterName: "make",
    filterType: filtersType.CHECKBOX,
  },
  {
    id: 4,
    label: "Model Year",
    filterName: "year",
    filterType: filtersType.SELECTOR,
  },
  {
    id: 5,
    label: "Mileage",
    filterName: "mileage",
    filterType: filtersType.SELECTOR,
  },
  {
    id: 6,
    label: "Fuel Type",
    filterName: "fueltype",
    filterType: filtersType.CHECKBOX,
  },
  {
    id: 7,
    label: "Exterior Color",
    filterName: "exteriorcolor",
    filterType: filtersType.CHECKBOX,
  },
  {
    id: 8,
    label: "Number of Seats",
    filterName: "numberofseats",
    filterType: filtersType.SELECTOR,
  },

  {
    id: 9,
    label: "Drivetrain",
    filterName: "drivetrain",
    filterType: filtersType.CHECKBOX,
  },
  {
    id: 10,
    label: "Interior Color",
    filterName: "interiorcolor",
    filterType: filtersType.CHECKBOX,
  },
];
