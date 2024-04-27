// Layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./side-bar"; // Ensure path is correct

const Layout = () => {
  return (
    <div className="flex h-screen overflow-scroll">
      {" "}
      {/* Prevent any overflow outside the viewport */}
      <Sidebar />
      <div className="flex-1 overflow-auto">
        {" "}
        {/* Main content area should scroll vertically only */}
        <Outlet /> {/* Renders the matched child route */}
      </div>
    </div>
  );
};

export default Layout;
