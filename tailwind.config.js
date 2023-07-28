/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "creamy-nile": "#e1eec3",
        "velvet-rose": "#f05053",
      },
    },
  },
  plugins: [],
};
