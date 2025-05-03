/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
  			project: {
  				"shadow": "rgba(0, 0, 0, 0.45)",

          "pink-100": "#606BBB",

          "blue-100": "#377999",

          "green-100": "#1BC063",
        }
      }
    },
  },
  plugins: [],
}