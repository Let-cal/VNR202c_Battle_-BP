import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            keyframes: {
                sparkle: {
                    "0%, 100%": { opacity: "0.75", scale: "0.9" },
                    "50%": { opacity: "1", scale: "1" },
                },
            },
            animation: {
                sparkle: "sparkle 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
export default config;
