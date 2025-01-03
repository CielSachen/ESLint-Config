/** @import { ESLint, Linter } from "eslint" */

import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactCompilerPlugin from "eslint-plugin-react-compiler";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import tailwindCssPlugin from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

/** The config for linting React features. */
export default Object.freeze(
  tseslint.config(
    importPlugin.flatConfigs.react,
    jsxA11yPlugin.flatConfigs.strict,
    /** @type {Linter.Config} */ (reactPlugin.configs.flat.recommended),
    /** @type {Linter.Config} */ (reactPlugin.configs.flat["jsx-runtime"]),
    // @ts-expect-error: The type of the default export is not being resolved properly.
    reactRefreshPlugin.configs.vite,
    tailwindCssPlugin.configs["flat/recommended"],
    prettierConfig,
    { name: "cielsachen/react/plugin-configs-override", rules: { "tailwindcss/classnames-order": "off" } },
    {
      name: "cielsachen/react",
      plugins: {
        "react-compiler": reactCompilerPlugin,
        "react-hooks": /** @type {ESLint.Plugin} */ (reactHooksPlugin),
      },
      languageOptions: { globals: { ...globals.browser }, parserOptions: { ecmaFeatures: { jsx: true } } },
      rules: {
        "react-compiler/react-compiler": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  ),
);
