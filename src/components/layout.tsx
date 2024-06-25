import { Outlet } from "react-router-dom";
import Sidebar from "./side-bar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ThemeToggle } from "./ui/theme-toggle";
import { useTheme } from "../hooks/useTheme";

const Layout = () => {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] dark:bg-[#000000] overflow-hidden">
      <div className="flex justify-between flex-row w-full h-[60px] fixed top-0 px-7">
        <div className="flex items-center ">
          <h1 className="text-black dark:text-white font-medium text-xl">
            💪 StrengthSync
          </h1>
        </div>
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="dark:bg-[#1A1A1C]">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="gap-8 flex flex-row items-center font-normal">
                Theme{" "}
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </DropdownMenuLabel>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
