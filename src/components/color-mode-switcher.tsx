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
        className="text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-white dark:text-white dark:hover:text-black dark:focus:ring-white dark:hover:bg-white"
        onClick={toggleDarkMode}
      >
        {colorTheme === "dark" ? <Moon /> : <Sun />}

        <span className="sr-only">Icon description</span>
      </button>
    </>
  );
}
