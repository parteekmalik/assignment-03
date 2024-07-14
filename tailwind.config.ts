import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      //   screens: {
      //     mobile: "0px",
      //     tablet: "600px",
      //     laptop: "960px",
      //     desktop: "1280px",
      // },
      colors: {
        mainRed: "#ff3147",
        cream: "#fafafa",
        creamDark: "#f6f6f6",
        lightText: "#808080"

        // mainBorder: "#CED4DA",
      },
      boxShadow: {
        'custom': '3px 6px 20px #672C2C1F',
      },
    },
  },
  plugins: [],
} satisfies Config;
