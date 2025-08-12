import { Outlet } from "react-router";
import Header from "../Header/Header";
import FilterBar from "../FilterBar/FilterBar";
import Modal from "../ui/Modal/Modal";
// import CheckBoxSelector from "../ui/CheckBox/CheckBoxSelector";
import Collapsable from "../ui/Collapsable/Collapsable";
import RangeSelector from "../ui/RangeSelector/RangeSelector";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-screen p-4 ">
      <Header />
      <main className="mt-4 w-full">
        <FilterBar />
        <Outlet />
      </main>
      <Modal>
        {[1, 2, 3, 4, 5].map(() => (
          <Collapsable>
            {/* <CheckBoxSelector /> */}
            <RangeSelector />
          </Collapsable>
        ))}
      </Modal>
    </div>
  );
};

export default Dashboard;
