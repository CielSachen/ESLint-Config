/** @import { Linter } from "eslint" */

import jsPlugin from "@eslint/js";
import jsonPlugin from "@eslint/json";
import markdownPlugin from "@eslint/markdown";
import prettierConfig from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";
import jsdocPlugin from "eslint-plugin-jsdoc";
import nodePlugin from "eslint-plugin-n";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import * as regexpPlugin from "eslint-plugin-regexp";
import securityPlugin from "eslint-plugin-security";
import unicornPlugin from "eslint-plugin-unicorn";
import globals from "globals";
import { config as defineConfig, configs as tsConfigs } from "typescript-eslint";

/**
 * The base config for all packages and apps.
 * @example Extending the Config
 * ```js
 * import cielSachenBaseConfig from "@cielsachen/eslint-config/base";
 * import { defineConfig } from "eslint/config";
 *
 * export default defineConfig(
 *   ...cielSachenBaseConfig,
 *
 *   // The rest of your ESLint config.
 * );
 * ```
 */
export default defineConfig(
  /* Extended Configs */
  markdownPlugin.configs.recommended,

  /* Main Config */
  {
    extends: [
      jsPlugin.configs.recommended,
      tsConfigs.strictTypeChecked,
      tsConfigs.stylisticTypeChecked,
      // @ts-expect-error: https://github.com/import-js/eslint-plugin-import/issues/3175
      /** @type {Linter.Config} */ (importPlugin.flatConfigs.recommended),
      // @ts-expect-error: https://github.com/import-js/eslint-plugin-import/issues/3175
      /** @type {Linter.Config} */ (importPlugin.flatConfigs.typescript),
      jsdocPlugin.configs["flat/recommended-typescript-flavor"],
      nodePlugin.configs["flat/recommended-module"],
      perfectionistPlugin.configs["recommended-natural"],
      regexpPlugin.configs["flat/recommended"],
      securityPlugin.configs.recommended,
      unicornPlugin.configs.recommended,
    ],
    files: ["**/*.?(c|m)[jt]s?(x)"],
    languageOptions: {
      globals: { ...globals.es2025, ...globals.nodeBuiltin },
      parserOptions: { ecmaFeatures: { impliedStrict: true } },
    },
    name: "cielsachen/base",
    rules: {
      /* Core */
      "@typescript-eslint/adjacent-overload-signatures": "off",
      "@typescript-eslint/explicit-function-return-type": ["error", { allowIIFEs: true }],
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "with-single-extends" },
      ],
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: true }],
      "block-scoped-var": "error",
      eqeqeq: "error",
      "guard-for-in": "error",
      "logical-assignment-operators": "error",
      "no-caller": "error",
      "no-else-return": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-implicit-coercion": "error",
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
      "no-void": ["error", { allowAsStatement: true }],
      "object-shorthand": "error",
      "one-var": ["error", "never"],
      "operator-assignment": "error",
      "perfectionist/sort-enums": ["error", { forceNumericSort: true }],
      "perfectionist/sort-exports": ["error", { groups: ["type-export", "value-export"] }],
      "perfectionist/sort-interfaces": [
        "error",
        { groups: ["index-signature", "property", "method"] },
      ],
      "perfectionist/sort-modules": [
        "error",
        { partitionByComment: false, partitionByNewLine: true },
      ],
      "perfectionist/sort-named-exports": ["error", { groups: ["type-export", "value-export"] }],
      "perfectionist/sort-named-imports": ["error", { groups: ["type-import", "value-import"] }],
      "perfectionist/sort-object-types": [
        "error",
        { groups: ["index-signature", "property", "method"] },
      ],
      "perfectionist/sort-objects": ["error", { groups: ["property", "method"] }],
      "prefer-const": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      radix: "error",
      yoda: "error",

      /* Importing and Exporting */
      "import/default": "off",
      "import/first": "error",
      "import/named": "off",
      "import/namespace": "off",
      "import/no-absolute-path": "error",
      "import/no-mutable-exports": "error",
      "import/no-named-as-default-member": "off",
      "import/no-named-default": "error",
      "import/no-self-import": "error",
      "import/no-unresolved": "off",
      "n/no-missing-import": "off",
      "n/no-missing-require": "off",

      /* Documentation */
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
          enableFixer: false,
          publicOnly: true,
          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true,
          },
        },
      ],
      "jsdoc/require-returns": ["warn", { checkGetters: false }],
      "jsdoc/sort-tags": "warn",
    },
    settings: {
      "import/resolver": { typescript: { alwaysTryTypes: true } },
      perfectionist: { partitionByComment: { block: String.raw`^[^\*]` }, type: "natural" },
    },
  },

  /* Override Configs */
  {
    files: ["**/*.?(c|m)js?(x)"],
    name: "cielsachen/base/js-override",
    rules: { "@typescript-eslint/explicit-function-return-type": "off" },
  },
  {
    extends: [jsdocPlugin.configs["flat/recommended-typescript"]],
    files: ["**/*.?(c|m)ts?(x)"],
    name: "cielsachen/base/ts-override",
    rules: { "jsdoc/check-tag-names": ["warn", { typed: false }] },
  },

  /* JSON Linting */
  {
    extends: [jsonPlugin.configs.recommended],
    files: ["**/*.json"],
    language: "json/json",
    name: "cielsachen/base/json",
  },
  {
    extends: [jsonPlugin.configs.recommended],
    files: ["**/*.jsonc"],
    language: "json/jsonc",
    name: "cielsachen/base/jsonc",
  },
  {
    files: ["**/[jt]sconfig.json", ".vscode/*.json"],
    language: "json/jsonc",
    // @ts-expect-error - Type mismatch between `eslint` and `typescript-eslint`.
    languageOptions: { allowTrailingCommas: true },
    name: "cielsachen/base/ms-jsonc",
  },
  {
    extends: [jsonPlugin.configs.recommended],
    files: ["**/*.json5"],
    language: "json/json5",
    name: "cielsachen/base/json5",
  },

  /* Prettier Compatibility */
  {
    extends: [prettierConfig],
    files: ["**/*.?(c|m)[jt]s?(x)"],
    name: "cielsachen/base/prettier",
    rules: {
      curly: ["error", "all"],
      "prefer-arrow-callback": "error",
      "unicorn/template-indent": [
        "error",
        {
          comments: ["indent"],
          functions: ["dedent", "stripIndent"],
          selectors: [],
          tags: ["outdent", "dedent", "sql", "styled"],
        },
      ],
    },
  },
);
