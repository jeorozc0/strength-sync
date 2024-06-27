import { Outlet } from "react-router-dom";
import Sidebar from "./side-bar";
import { PageContainer } from "./page-container";

const Layout = () => {
  return (
    <PageContainer>
      <div className="flex flex-1 h-full w-full mb-2 rounded-lg shadow overflow-hidden">
        <Sidebar />
        <div className="w-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </PageContainer>
  );
};

export default Layout;
