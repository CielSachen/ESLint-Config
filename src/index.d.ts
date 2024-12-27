import baseConfig from "./base.js";
import reactConfig from "./react.js";

/** The collection of CielSachen's ESLint configs. */
declare const cielsachenConfigs: {
  /** The config for linting JavaScript, Node.js, and TypeScript features. */
  readonly base: typeof baseConfig;
  /** The config for linting React features. */
  readonly react: typeof reactConfig;
};

export default cielsachenConfigs;
