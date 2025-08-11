import { Outlet } from "react-router";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-screen p-4 ">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
