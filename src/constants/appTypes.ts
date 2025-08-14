export type carType = {
  make: string;
  model: string;
  trim: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  image: string;
  drivetrain: string;
  bodytype: string;
  numberofseats: number;
  exteriorcolor: string;
  interiorcolor: string;
  fueltype: string;
  [key: string]: string | number;
};

export type carsType = carType[];

export type filterType = {
  id: number;
  label: string;
  filterName: string;
  filterType: string;
};
