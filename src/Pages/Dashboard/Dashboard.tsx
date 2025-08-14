import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import FilterBar from "../../components/FilterBar/FilterBar";
import Modal from "../../components/ui/Modal/Modal";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import SortBar from "../../components/SortBar/SortBar";
import CarList from "../../components/CarList/CarList";
import { getCarsData } from "../../api/carData";
import { useEffect } from "react";
import { setCarsStore } from "../../stores/carsStore";

const Dashboard = () => {
  useEffect(() => {
    getCarsData().then((resp) => {
      setCarsStore(resp);
    });
  }, []);

  return (
    <div className="relative flex flex-col justify-start items-start w-full h-screen p-4 md:px-32">
      <div className="max-md:hidden absolute top-100 left-0 h-[2400px] w-full bg-slate-100" />
      <Header />
      <main className=" relative mt-4 w-full">
        <FilterBar />
        <SortBar />

        <div className="relative flex justify-start items-start w-full  ">
          <div className="sticky top-5 left-5 hidden ml-4 md:flex justify-center items-center rounded-2xl border-1 border-slate-200 border-solid md:min-w-[300px] py-1 overflow-y-hidden">
            <FilterPanel />
          </div>
          <div className="w-full ">
            <CarList />
          </div>
        </div>

        <Outlet />
      </main>
      <div className="md:hidden">
        <Modal>
          <FilterPanel />
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
