import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPath from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  return {
    define: {
      "process.env": loadEnv(mode, process.cwd(), ""),
    },
    plugins: [react(), tsconfigPath()],
    server: {
      port: 4444,
    },
  };
});