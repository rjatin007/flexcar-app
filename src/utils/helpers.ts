import type { carsType, carType } from "../constants/appTypes";

export const getMin = (arr: carsType, field: string) => {
  let min: number = Number(arr[0][field]);
  arr.forEach((item: carType) => {
    if (Number(item[field]) < min) {
      min = Number(item[field]);
    }
  });
  return min;
};
export const getMax = (arr: carsType, field: string) => {
  let max: number = Number(arr[0][field]);
  arr.forEach((item: carType) => {
    if (Number(item[field]) > max) {
      max = Number(item[field]);
    }
  });
  return max;
};
