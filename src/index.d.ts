import type { TSESLint } from "@typescript-eslint/utils";

/** The collection of ESLint configs for CielSachen's Node.js projects. */
declare const cielsachenConfigs: {
  /** The base ESLint config for CielSachen's Node.js projects. */
  base: Readonly<TSESLint.FlatConfig.ConfigArray>;
  /** An additional ESLint config for CielSachen's React.js projects. */
  react: Readonly<TSESLint.FlatConfig.ConfigArray>;
};

export default cielsachenConfigs;
