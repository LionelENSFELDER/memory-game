import useDarkMode from "../hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";

export default function ColorModeSwitcher() {
  const [colorTheme, setColorTheme] = useDarkMode();

  const toggleDarkMode = () => {
    colorTheme === "light" ? setColorTheme("dark") : setColorTheme("light");
  };

  return (
    <>
      <button
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        onClick={toggleDarkMode}
      >
        {colorTheme === "dark" ? <Moon /> : <Sun />}

        <span className="sr-only">Icon description</span>
      </button>
    </>
  );
}
