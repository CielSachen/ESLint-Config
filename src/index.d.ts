import baseConfig from "./base.js";
import reactConfig from "./react.js";

/** The collection of CielSachen's ESLint configurations. */
declare const cielsachenConfigs: {
  /** The configuration for linting JavaScript, Node.js, and TypeScript features. */
  readonly base: typeof baseConfig;
  /** The configuration for linting React features. */
  readonly react: typeof reactConfig;
};

export default cielsachenConfigs;
