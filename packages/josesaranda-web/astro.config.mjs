import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [astroI18next(), react()],
  outDir: '../../dist/packages/josesaranda-web',
});