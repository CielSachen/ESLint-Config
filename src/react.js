/** @import { ESLint, Linter } from "eslint" */

import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactCompilerPlugin from "eslint-plugin-react-compiler";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

/** The configuration for linting React features. */
export default tseslint.config(
  importPlugin.flatConfigs.react,
  jsxA11yPlugin.flatConfigs.strict,
  /** @type {Linter.Config} */ (reactPlugin.configs.flat.recommended),
  /** @type {Linter.Config} */ (reactPlugin.configs.flat["jsx-runtime"]),
  prettierConfig,
  {
    name: "cielsachen/react",
    plugins: {
      "react-compiler": reactCompilerPlugin,
      "react-hooks": /** @type {ESLint.Plugin} */ (reactHooksPlugin),
      "react-refresh": reactRefreshPlugin,
    },
    languageOptions: { globals: { ...globals.browser }, parserOptions: { ecmaFeatures: { jsx: true } } },
    rules: {
      "react-compiler/react-compiler": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": "warn",
    },
  },
);
