import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setColorTheme] = useState<string>(localStorage.theme);
  const colorTheme: string = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setColorTheme];
}
