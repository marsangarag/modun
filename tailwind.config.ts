import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                lightblue: "#C7F4FE",
                blue: "#0043D2",
                red: "#EC1D24",
                colina: "#E3A463",
            },
            fontSize: {
                sm: "18px",
                base: "24px",
                big: "32px",
                bigger: "48px",
                huge: "64px",
                84: "84px",
                biggest: "128px",
            },
        },
    },
    plugins: [],
};
export default config;
