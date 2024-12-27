# ESLint Config

[![Node Current](https://img.shields.io/badge/node-%3E%3D22.11.0-brightgreen)](https://github.com/nodejs/node)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4)](https://github.com/prettier/prettier)

A small Node.js package that provides the collection of different ESLint configs used in my Node.js projects. They have been bundled into this package to reduce repetition and maintain my sanity. My preferences, influenced by Google’s [style guide](https://google.github.io/styleguide/tsguide.html), determined the enabled rules.

## Installation

> [!IMPORTANT]
> My packages are available in GitHub packages, **NOT** npm; therefore, you must define the registry of the `@cielsachen` namespace in a `.npmrc` file:
>
> ```properties
> @cielsachen:registry=https://npm.pkg.github.com
> ```

```bash
pnpm add -D @cielsachen/eslint-config
```

## Usage

This package includes multiple configs; only extend those relevant to your project. The configs are:

1. **Base** - The config for linting JavaScript, Node.js, and TypeScript features.
2. **React** - The config for linting React features.

### Example

Here's a simple example of extending my base config in an `eslint.config.js` file:

```js
import cielsachenConfigs from "@cielsachen/eslint-config";

export default {
  ...cielsachenConfigs.base,
  // The rest of your ESLint config.
};
```
