import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                main: "#F9F9FB",
                lightblue: "#d7e0ec",
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
