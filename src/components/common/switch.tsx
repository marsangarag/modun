import { useThemeSwitcher } from "@/lib/helper";

export default function Switcher() {
    const { theme, setTheme } = useThemeSwitcher();
    const onThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <label className="ios-switch">
            <input
                onChange={onThemeChange}
                checked={theme === "dark"}
                type="checkbox"
            />
            <i></i>
        </label>
    );
}
