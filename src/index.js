import baseConfig from "./base.js";
import reactConfig from "./react.js";

/** The collection of CielSachen's ESLint configs. */
export default Object.freeze({
  /** The config for linting JavaScript, Node.js, and TypeScript features. */
  base: baseConfig,
  /** The config for linting React features. */
  react: reactConfig,
});
