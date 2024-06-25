import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ThemeToggle } from "./ui/theme-toggle";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";
export function OptionsDropdown() {
  const { darkMode, setDarkMode } = useTheme();
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };


  return (
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
          Theme <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </DropdownMenuLabel>
        <DropdownMenuItem className="h-10">Billing</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer h-10">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
