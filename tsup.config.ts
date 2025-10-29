import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "build",
  target: "node18",
  format: ["cjs"],    // or "esm" if you use ES modules
  sourcemap: true,
  clean: true,
  minify: false,
  dts: true,            // generate .d.ts files
});
