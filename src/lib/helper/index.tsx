import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeSwitcher() {
    const [mode, setMode] = useState("light");
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (theme) {
            setMode(theme);
        }
    }, [theme]);

    return { theme: mode, setTheme };
}
