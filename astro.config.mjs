import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://goodborn.github.io",
  base: "/PersonalAppsShowcase-CKDEPS",
  integrations: [tailwind()],
});