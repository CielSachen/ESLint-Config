import baseConfig from "./base.js";
import reactConfig from "./react.js";

/** The collection of CielSachen's ESLint configurations. */
export default Object.freeze({
  /** The configuration for linting JavaScript, Node.js, and TypeScript features. */
  base: baseConfig,
  /** The configuration for linting React features. */
  react: reactConfig,
});
