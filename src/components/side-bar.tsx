import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col">
      <div
        className="w-64
        flex-grow sticky top-0 bg-[#FBFBFB] dark:bg-[#1A1A1C] border-r dark:border-black p-5 pt-10"
      >
        <ul className="">
          <NavLink to={"/routine"}>
            {({ isActive }) => (
              <li
                className={`flex rounded-md p-2 cursor-pointer text-[#6e6e80] dark:text-[#c5c5d2] text-md items-center gap-x-4   ${
                  isActive
                    ? "bg-[#ececf1] dark:bg-[#353740] dark:text-[#fff] text-black font-medium"
                    : "hover:bg-[#f7f7f8] dark:hover:bg-[#353740]"
                }`}
              >
                <AssignmentIcon />
                <span>Routines</span>
              </li>
            )}
          </NavLink>
          <NavLink to={"/tracker"}>
            {({ isActive }) => (
              <li
                className={`flex rounded-md p-2 cursor-pointer text-[#6e6e80] dark:text-[#c5c5d2] text-md items-center gap-x-4   ${
                  isActive
                    ? "bg-[#ececf1] dark:bg-[#353740] dark:text-[#fff] text-black font-medium"
                    : "hover:bg-[#f7f7f8] dark:hover:bg-[#353740]"
                }`}
              >
                <AssessmentIcon />
                <span>Tracker</span>
              </li>
            )}
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
