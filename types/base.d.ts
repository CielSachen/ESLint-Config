import type { Linter } from "eslint";

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
declare const cielSachenBaseConfig: Linter.Config[];

export default cielSachenBaseConfig;
