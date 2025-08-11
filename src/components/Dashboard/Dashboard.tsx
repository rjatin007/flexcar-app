import { Outlet } from "react-router";
import Header from "../Header/Header";
import FilterBar from "../FilterBar/FilterBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-screen p-4 ">
      <Header />
      <main className="mt-4 w-full">
        <FilterBar />
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
