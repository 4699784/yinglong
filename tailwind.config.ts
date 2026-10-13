import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        foam: "var(--foam)",
        ink: "var(--ink)",
        jade: "var(--jade)",
        moss: "var(--moss)",
        mist: "var(--mist)",
        ember: "var(--ember)",
        "pine-ink": "var(--pine-ink)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
