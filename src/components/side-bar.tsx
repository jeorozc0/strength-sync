import { useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../hooks/useAuth";
import {  NavLink } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const { user, signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="flex flex-col divide-y">
      <div
        className={`${
          open ? "w-64" : "w-20"
        } flex-grow sticky top-0 bg-white p-5 pt-8 duration-300`}
      >
        <img
          src="/src/assets/control.png"
          alt="Button to open menu"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#ECEDF0]
             border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          {open ? (
            <h1 className="text-black origin-left font-medium text-xl duration-200">
              StrengthSync
            </h1>
          ) : (
            <div className="px-2">
              <HomeIcon />
            </div>
          )}
        </div>
        <ul className="pt-6">
          <NavLink to={"/routine"}>
            {({ isActive }) => (
              <li
                className={`flex rounded-md p-2 cursor-pointer text-black text-md items-center gap-x-4   ${
                  isActive ? "bg-[#E8F2FD]" : "hover:bg-[#F9FAFB]"
                }`}
              >
                <AssignmentIcon />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Routines
                </span>
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
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Tracker
                </span>
              </li>
            )}
          </NavLink>
        </ul>
      </div>
      <div
        className={`flex items-center justify-between ${
          open ? "w-64" : "w-20"
        } h-14 p-4 gap-2`}
      >
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          {user?.email}
        </span>
        <button
          title="Logout"
          className="flex items-center w-full h-full"
          onClick={handleLogout}
        >
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
