import { useEffect, useState } from "react";
export default function useDarkMode() {
  const [theme, setColorTheme] = useState<"light" | "dark">(localStorage.theme);
  const colorThemeToRemove: string = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;
    root.classList.remove(colorThemeToRemove);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorThemeToRemove]);

  return [theme, setColorTheme] as const;
}
