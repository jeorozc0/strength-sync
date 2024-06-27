import { Outlet } from "react-router-dom";
import Sidebar from "./side-bar";
import { OptionsDropdown } from "./options-dropdown";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] dark:bg-[#000000] overflow-hidden">
      <div className="flex justify-between flex-row w-full h-12 fixed top-0 px-7">
        <div className="flex items-center ">
          <h1 className="text-black dark:text-white font-medium text-xl">
            💪 StrengthSync
          </h1>
        </div>
        <div className="flex items-center">
          <OptionsDropdown />
        </div>
      </div>
      <div className="flex min-h-[calc(100%-68px)] mt-[var(--global-header-height)] mx-2 mb-2 border overflow-hidden rounded-lg shadow">
        <Sidebar />
        <div className="w-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
