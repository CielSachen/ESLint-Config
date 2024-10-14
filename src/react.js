import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

/** An additional ESLint config for CielSachen's React.js projects. */
export const reactConfig = tseslint.config(
  // Extend shared and built-in configs.
  importPlugin.flatConfigs.react,
  // @ts-expect-error: TypeScript can't accurately infer the types.
  jsxA11yPlugin.configs.strict,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  prettierConfig,

  // Define the shared config.
  {
    name: "cielsachen/react",
    plugins: { "react-hooks": reactHooksPlugin, "react-refresh": reactRefreshPlugin },
    languageOptions: { globals: { ...globals.browser }, parserOptions: { ecmaFeatures: { jsx: true } } },
    rules: {
      // eslint-plugin-react-hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // eslint-plugin-react-refresh
      "react-refresh/only-export-components": "warn",
    },
  },
);
