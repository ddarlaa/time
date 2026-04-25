import { defineConfig } from "vite";

// ЗАМЕНИТЕ repo-name на имя вашего репозитория!
const repoName = "time";

export default defineConfig({
  base: `/${repoName}/`,
  build: {
    outDir: "docs"
  }
});