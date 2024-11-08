# ESLint Config

[![Node Current](https://img.shields.io/badge/node-%3E%3D22.11.0-brightgreen)](https://github.com/nodejs/node)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4)](https://github.com/prettier/prettier)

A small Node.js package that contains a collection of different ESLint configs used in my Node.js projects. They have been bundled in this package to reduce repetition and maintain my sanity. The enabled rules stem from my preferences (which are influenced by Google's [style guide](https://google.github.io/styleguide/tsguide.html)).

## Installation

> My packages are available in GitHub packages, **NOT** npm. Therefore, you must define the registry of the `@cielsachen` namespace in a `.npmrc` file.
>
> ```properties
> @cielsachen:registry=https://npm.pkg.github.com
> ```

```bash
pnpm add -D @cielsachen/eslint-config
```

## Usage

This package contains several configs, and you should only extend the ones that apply to your project.

The configs are:

- **Base**: The base ESLint configuration for my Node.js projects.
- **React**: An additional ESLint configuration for my React.js projects.

### Example

Here's a simple example of extending my base configuration in an `eslint.config.{js,mjs}` file:

```js
import cielsachenConfigs from "@cielsachen/eslint-config";

export default {
  ...cielsachenConfigs.base,

  // Define the rest of your ESLint configuration.
};
```
