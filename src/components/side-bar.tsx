import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { NavLink } from "react-router-dom";

const SideBar = () => {


  return (
    <div className="flex flex-col">
      <div
        className="w-64
        flex-grow sticky top-0 bg-[#FBFBFB] border-r p-5 pt-10 duration-300"
      >
        <ul className="">
          <NavLink to={"/routine"}>
            {({ isActive }) => (
              <li
                className={`flex rounded-md p-2 cursor-pointer text-black text-md items-center gap-x-4   ${
                  isActive ? "bg-[#E8F2FD]" : "hover:bg-[#F9FAFB]"
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
                className={`flex rounded-md p-2 cursor-pointer text-black text-md items-center gap-x-4   ${
                  isActive ? "bg-[#E8F2FD]" : "hover:bg-[#F9FAFB]"
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
