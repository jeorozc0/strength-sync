import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../hooks/useAuth";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const { user, signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="flex flex-col divide-y">
      <div
        className="w-64
        flex-grow sticky top-0 bg-white p-5 pt-8 duration-300"
      >
        <div className="flex gap-x-4 items-center">
          <h1 className="text-black font-medium text-xl">StrengthSync</h1>
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
      <div
        className="flex items-center justify-$
           between
       h-14 p-4 gap-2"
      >
        <span className=" w-full h-full origin-left duration-200">
          {user?.email}
        </span>
        <button
          title="Logout"
          className="flex items-center w-auto h-full"
          onClick={handleLogout}
        >
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
