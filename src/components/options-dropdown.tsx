import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ThemeToggle } from "./ui/theme-toggle";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";
export function OptionsDropdown() {
  const { darkMode, setDarkMode } = useTheme();
  const { user, signOut } = useAuth();
  const userEmail = user?.email;
  const avatarFallback = userEmail?.charAt(0).toUpperCase();

  const handleLogout = () => {
    signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-[#1A1A1C]">
        <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="gap-8 flex flex-row items-center font-normal">
          Theme <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </DropdownMenuLabel>
        <DropdownMenuItem className="h-10" disabled>
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer h-10"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
