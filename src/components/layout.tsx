import { Outlet } from "react-router-dom";
import Sidebar from "./side-bar";
import { OptionsDropdown } from "./options-dropdown";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] dark:bg-[#000000] overflow-hidden">
      <div className="flex justify-between flex-row w-full h-[60px] fixed top-0 px-7">
        <div className="flex items-center ">
          <h1 className="text-black dark:text-white font-medium text-xl">
            💪 StrengthSync
          </h1>
        </div>
        <div className="flex items-center">
          <OptionsDropdown />
        </div>
      </div>
      <div className="flex h-[calc(100vh-68px)] mt-[60px] mx-2 mb-2 border overflow-hidden rounded-lg shadow">
        <Sidebar />
        <div className="flex-1 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
