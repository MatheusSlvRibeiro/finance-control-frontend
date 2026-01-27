import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@data": path.resolve(__dirname, "src/data"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@appTypes": path.resolve(__dirname, "src/types/"),
			"@services": path.resolve(__dirname, "src/services/"),
			"@mocks": path.resolve(__dirname, "src/mocks/"),
			"@context": path.resolve(__dirname, "src/context/"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				loadPaths: [path.resolve(__dirname, "src/styles")],
				additionalData: `@use "variables.scss" as *;\n@use "sass:color";\n`,
			},
		},
	},
});
