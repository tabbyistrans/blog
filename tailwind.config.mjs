/** @type {import('tailwindcss').Config} */
import catppuccin from "@catppuccin/daisyui";
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require(`daisyui`), require("@catppuccin/tailwindcss")],
  daisyui: {
    themes: [catppuccin("mocha", { primary: "teal" })],
  },
};
