import type { Linter } from "eslint";

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
declare const cielSachenReactConfig: Linter.Config[];

export default cielSachenReactConfig;
