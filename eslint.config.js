// @ts-check

import cielsachenConfigs from "@cielsachen/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Extend a shared configuration.
  ...cielsachenConfigs.base,

  // Sets the JSConfig for the TypeScript parser to use.
  {
    languageOptions: {
      parserOptions: {
        projectService: { allowDefaultProject: ["*.config.js"], defaultProject: "jsconfig.json" },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Disable TypeScript-only rules because this project only uses a JSConfig.
  {
    files: ["src/*.d.ts"],
    extends: [tseslint.configs.disableTypeChecked],
    rules: { "@typescript-eslint/explicit-function-return-type": "off" },
  },
);
