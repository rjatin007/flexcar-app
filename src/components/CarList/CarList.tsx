import Card from "../ui/Card/Card";
import { useCarsStore } from "../../stores/carsStore";
import type { carType } from "../../constants/appTypes";

const CarList = () => {
  const cars = useCarsStore((state) => state.cars);

  return (
    <div className="grid grid-cols-1  md:grid-cols-3 gap-4 px-2 md:gap-6 md:ml-4">
      {cars && cars?.length && cars.map((car: carType) => <Card car={car} />)}
    </div>
  );
};

export default CarList;
