import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                lightblue: "#C7F4FE",
                blue: "#0043D2",
            },
            fontSize: {
                sm: "14px",
                base: "16px",
                lg: "24px",
            },
        },
    },
    plugins: [],
};
export default config;
