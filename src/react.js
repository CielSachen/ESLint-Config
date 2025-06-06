/** @import { Linter } from "eslint" */

import cssPlugin from "@eslint/css";
import prettierConfig from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import tailwindCSSPlugin from "eslint-plugin-tailwindcss";
import globals from "globals";
import { config as defineConfig } from "typescript-eslint";

/**
 * An additional config for React-based web apps.
 * @example Extending the Config
 * ```js
 * import cielSachenReactConfig from "@cielsachen/eslint-config/react";
 * import { defineConfig } from "eslint/config";
 *
 * export default defineConfig(
 *   ...cielSachenReactConfig,
 *
 *   // The rest of your ESLint config.
 * );
 * ```
 */
export default defineConfig(
  /* Main Config */
  {
    extends: [
      // @ts-expect-error: https://github.com/import-js/eslint-plugin-import/issues/3175
      /** @type {Linter.Config} */ (importPlugin.flatConfigs.react),
      jsxA11yPlugin.flatConfigs.strict,
      // @ts-expect-error: https://github.com/jsx-eslint/eslint-plugin-react/issues/3878
      /** @type {Linter.Config} */ (reactPlugin.configs.flat.recommended),
      /** @type {Linter.Config} */ (reactPlugin.configs.flat["jsx-runtime"]),
      reactHooksPlugin.configs["recommended-latest"],
      reactRefreshPlugin.configs.vite,
      tailwindCSSPlugin.configs["flat/recommended"],
    ],
    files: ["**/*.?(c|m)[jt]s?(x)"],
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    name: "cielSachen/react",
    settings: { react: { version: "detect" } },
  },

  /* CSS Linting */
  {
    extends: [cssPlugin.configs.recommended],
    files: ["**/*.css"],
    language: "css/css",
    name: "cielsachen/react/css",
  },

  /* Prettier Compatibility */
  {
    extends: [prettierConfig],
    name: "cielsachen/react/prettier",
    rules: { "tailwindcss/classnames-order": "off" },
  },
);
