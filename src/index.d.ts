import type { Linter } from "eslint";

/** The collection of ESLint configs for CielSachen's Node.js projects. */
declare const cielsachenConfigs: {
  /** The base ESLint config for CielSachen's Node.js projects. */
  readonly base: readonly Readonly<Linter.Config>;
  /** An additional ESLint config for CielSachen's React.js projects. */
  readonly react: readonly Readonly<Linter.Config>;
};

export default cielsachenConfigs;
