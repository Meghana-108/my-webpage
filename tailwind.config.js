/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        purple: {
          deep: "#150050",
          royal: "#3F0071",
          electric: "#610094",
          meow: "#d4f41eff",
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "float-fast": "float 6s ease-in-out infinite",
        ping: "ping 10s cubic-bezier(0, 0, 0.2, 1) infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
