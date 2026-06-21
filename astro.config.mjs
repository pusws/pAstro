import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://prohub.webn.cc/pAstro",
  base: "pusws/pAstro",
  server: {
    host: true,
    port: 4321,
  },
  devToolbar: {
    enabled: false,
  },
});
