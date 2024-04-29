// Layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./side-bar"; // Ensure path is correct

const Layout = () => {
  return (
    <div className="flex h-screen overflow-scroll">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
