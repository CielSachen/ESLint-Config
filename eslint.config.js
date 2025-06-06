// @ts-check

import cielSachenBaseConfig from "@cielsachen/eslint-config/base";
import { defineConfig } from "eslint/config";

export default defineConfig(
  /* Extended Configs */
  cielSachenBaseConfig,

  /* Main Config */
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.config.js", "README.md/*.js"],
          defaultProject: "jsconfig.json",
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
