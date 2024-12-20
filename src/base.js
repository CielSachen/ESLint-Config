/** @import { Linter } from "eslint" */

import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsdocPlugin from "eslint-plugin-jsdoc";
import nodePlugin from "eslint-plugin-n";
import securityPlugin from "eslint-plugin-security";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unicornPlugin from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

/** The configuration for linting JavaScript, Node.js, and TypeScript features. */
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.recommended,
  /** @type {Linter.Config} */ (importPlugin.flatConfigs.typescript),
  jsdocPlugin.configs["flat/recommended-typescript-flavor"],
  nodePlugin.configs["flat/recommended-module"],
  securityPlugin.configs.recommended,
  unicornPlugin.configs["flat/recommended"],
  prettierConfig,
  {
    name: "cielsachen/base/plugin-configs-override",
    rules: {
      "import/default": "off",
      "import/named": "off",
      "import/namespace": "off",
      "import/no-named-as-default-member": "off",
      "import/no-unresolved": "off",
      "n/no-missing-import": "off",
      "n/no-missing-require": "off",
    },
  },
  {
    name: "cielsachen/base",
    languageOptions: {
      ecmaVersion: "latest",
      globals: { ...globals.es2025, ...globals.nodeBuiltin },
      parserOptions: { ecmaFeatures: { impliedStrict: true } },
    },
    plugins: { "simple-import-sort": simpleImportSortPlugin },
    rules: {
      "block-scoped-var": "error",
      curly: ["error", "multi-line", "consistent"],
      eqeqeq: ["error", "always", { null: "never" }],
      "guard-for-in": "error",
      "logical-assignment-operators": "error",
      "no-array-constructor": "error",
      "no-caller": "error",
      "no-else-return": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-implicit-coercion": ["error", { boolean: false }],
      "no-invalid-this": "error",
      "no-lonely-if": "error",
      "no-multi-str": "error",
      "no-new-wrappers": "error",
      "no-object-constructor": "error",
      "no-throw-literal": "error",
      "no-unreachable-loop": "error",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-var": "error",
      "no-void": ["error", { allowAsStatement: true }],
      "object-shorthand": "error",
      "one-var": ["error", "never"],
      "operator-assignment": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      radix: "error",
      yoda: "error",
      "@typescript-eslint/explicit-function-return-type": ["error", { allowIIFEs: true }],
      "@typescript-eslint/no-empty-object-type": ["error", { allowInterfaces: "with-single-extends" }],
      "import/first": "error",
      "import/no-absolute-path": "error",
      "import/no-mutable-exports": "error",
      "import/no-named-default": "error",
      "import/no-self-import": "error",
      "jsdoc/check-syntax": "warn",
      "jsdoc/check-template-names": "warn",
      "jsdoc/informative-docs": "warn",
      "jsdoc/no-bad-blocks": ["warn", { preventAllMultiAsteriskBlocks: true }],
      "jsdoc/no-blank-block-descriptions": "warn",
      "jsdoc/no-blank-blocks": "warn",
      "jsdoc/no-multi-asterisks": ["warn", { allowWhitespace: true }],
      "jsdoc/require-asterisk-prefix": "warn",
      "jsdoc/require-hyphen-before-param-description": ["warn", "never"],
      "jsdoc/require-jsdoc": [
        "warn",
        {
          publicOnly: true,
          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true,
          },
          contexts: [
            "PropertyDefinition",
            "TSEnumDeclaration",
            "TSEnumMember",
            "TSInterfaceDeclaration",
            "TSMethodSignature",
            "TSModuleDeclaration",
            "TSPropertySignature",
            "TSTypeAliasDeclaration",
          ],
        },
      ],
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": "warn",
      "unicorn/template-indent": [
        "error",
        {
          tags: ["outdent", "dedent", "sql", "styled"],
          functions: ["dedent", "stripIndent"],
          selectors: [],
          comments: ["indent"],
        },
      ],
    },
    settings: { "import/resolver": { typescript: true, node: true } },
  },
  {
    name: "cielsachen/base/js-override",
    files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
    extends: [tseslint.configs.disableTypeChecked],
    rules: { "@typescript-eslint/explicit-function-return-type": "off" },
  },
  {
    name: "cielsachen/base/ts-override",
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    extends: [jsdocPlugin.configs["flat/recommended-typescript"]],
  },
);
