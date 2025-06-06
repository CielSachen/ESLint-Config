import baseConfig from "./base.js";
import reactConfig from "./react.js";

/**
 * The configs for CielSachen's Node.js projects.
 * @example Extending the Base Config
 * ```js
 * import cielSachenConfigs from "@cielsachen/eslint-config";
 * import { defineConfig } from "eslint/config";
 *
 * export default defineConfig(
 *   ...cielSachenConfigs.base,
 *
 *   // The rest of your ESLint config.
 * );
 * ```
 */
export default {
  /** The base config for all packages and apps. */
  base: baseConfig,
  /** An additional config for React-based web apps. */
  react: reactConfig,
};
