// @ts-check

import cielsachenBaseConfig from "@cielsachen/eslint-config/base";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...cielsachenBaseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: { allowDefaultProject: ["*.config.js"], defaultProject: "jsconfig.json" },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["src/*.d.ts"],
    rules: {
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
    },
  },
);
