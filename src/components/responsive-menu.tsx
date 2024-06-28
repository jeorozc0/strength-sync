import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { NavLink } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
export function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="lg:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <SheetHeader>
          <SheetTitle>💪 StrengthSync</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col mt-6 text-lg font-medium">
          <SheetClose asChild>
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
          </SheetClose>
          <SheetClose asChild>
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
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
