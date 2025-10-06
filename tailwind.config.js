export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kantumruy Pro", "Roboto", "sans-serif"], // this overrides Tailwind's default
        moul: ["Moul", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
