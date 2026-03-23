export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "var(--primary)",
      "primary-foreground": "var(--primary-foreground)",

      secondary: "var(--secondary)",
      "secondary-foreground": "var(--secondary-foreground)",

      background: "var(--background)",
      foreground: "var(--foreground)",

      muted: "var(--muted)",
      "muted-foreground": "var(--muted-foreground)",

      destructive: "var(--destructive)",
      border: "var(--border)",
      input: "var(--input)",
      ring: "var(--ring)",
    },
  },
},
  plugins: [],
}