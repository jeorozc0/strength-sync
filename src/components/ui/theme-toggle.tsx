import { SystemSVG, MoonSVG, SunSVG } from "./svg";

interface ThemeToggleProps {
  darkMode: string;
  setDarkMode: (value: "light" | "dark" | "system") => void;
}

export function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  const handleValueChange = (value: string) => {
    setDarkMode(value as "light" | "dark" | "system");
  };
  return (
    <div className="inline-flex rounded-lg border border-gray-100 dark:border-black bg-gray-100 dark:bg-black p-1">
      <button
        className={`inline-block rounded-md ${darkMode === "light" ? "bg-white dark:bg-[#2B2C32]" : ""} px-4 py-2 text-sm text-blue-500 dark:text-white shadow-sm focus:relative`}
        onClick={() => handleValueChange("light")}
        title="light"
      >
        <SunSVG />
      </button>

      <button
        className={`inline-block rounded-md ${darkMode === "dark" ? "bg-white dark:bg-[#2B2C32]" : ""} px-4 py-2 text-sm text-blue-500 dark:text-white shadow-sm focus:relative`}
        title="dark"
        onClick={() => handleValueChange("dark")}
      >
        <MoonSVG />
      </button>

      <button
        className={`inline-block rounded-md ${darkMode === "system" ? "bg-white dark:bg-[#2B2C32]" : ""} px-4 py-2 text-sm text-blue-500 dark:text-white shadow-sm focus:relative`}
        title="system"
        onClick={() => handleValueChange("system")}
      >
        <SystemSVG />
      </button>
    </div>
  );
}
