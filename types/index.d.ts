import type baseConfig from "./base.js";
import type reactConfig from "./react.js";

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
declare const cielSachenConfigs: {
  /** The base config for all packages and apps. */
  readonly base: typeof baseConfig;
  /** An additional config for React-based web apps. */
  readonly react: typeof reactConfig;
};

export default cielSachenConfigs;
