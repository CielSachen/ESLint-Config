// @ts-check

import cielsachenConfigs from "@cielsachen/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...cielsachenConfigs.base,
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
    extends: [tseslint.configs.disableTypeChecked],
    rules: { "@typescript-eslint/explicit-function-return-type": "off" },
  },
);
