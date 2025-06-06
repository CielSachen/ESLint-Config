# ESLint Config

[![Node Current](https://img.shields.io/badge/Node.js-%3E%3D22.11.0-brightgreen?style=flat-square)](https://github.com/nodejs/node)
[![Code Style](https://img.shields.io/badge/Code_Style-prettier-ff69b4?style=flat-square)](https://github.com/prettier/prettier)

A small Node.js package that provides the ESLint configs for my Node.js projects. The configs were bundled into this package for easier reusability between different projects. The enabled rules and settings are based on my personal preferences, which have been influenced by Google’s [style guide](https://google.github.io/styleguide/tsguide.html).

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

The configs can be used by importing them into your ESLint config file and adding them to the config array:

> [!NOTE]
> This package includes multiple configsm only extend those relevant to your project.

```js
import cielSachenConfigs from "@cielsachen/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...cielSachenConfigs.base,

  // The rest of your ESLint config.
);
```

The configs may also be directly imported:

```js
import cielSachenBaseConfig from "@cielsachen/eslint-config/base";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...cielSachenBaseConfig,

  // The rest of your ESLint config.
);
```
