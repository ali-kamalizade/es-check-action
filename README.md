# es-check-action

![Checks](https://github.com/ali-kamalizade/es-check-action/workflows/Checks/badge.svg?branch=master)

This GitHub Action checks JavaScript files against a specified version of ECMAScript (ES). If a specified file's ES version doesn't match the ES version argument, this action will throw an error and log the files that didn't match the check.

In modern JavaScript builds, files are bundled up so they can be served in an optimized manner in the browsers. It is assumed by developers that future JavaScript—like ES8 will be transpiled (changed from future JavaScript to current JavaScript) appropriately by a tool like Babel or TypeScript. Sometimes there is an issue where files are not transpiled which would cause issues in browsers who don't support all the latest features (e.g. IE11).

[Check out my blog post about this topic.](https://medium.com/better-programming/check-your-javascript-bundles-for-browser-support-d769c1fca4c)

## Features

- Speed: this check shouldn't take more than a few seconds
- Flexibility: choose which files should be checked
- Compability: choose the ES version you want to target. `ES5` is a good choice to have maximum compatibility

## Inputs

- `directory` - Directory which should be checked
- `ecmaVersion` - The ECMAScript version to check for against a glob of JavaScript files
- `files` - A glob of files to test the ECMAScript version against

## Example usage

Create a [workflow](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) and paste this

```yaml
- uses: actions/es-check-action@1.0.2
  with:
    directory: 'dist'
    ecmaVersion: 'es5'
    files: '*.js'
```

## Local development setup

1. Download the repository.
2. Install Node.js if you haven't already.
3. Use `npm ci` to install the necessary dependencies.
4. The source code is written in TypeScript in the `src` directory.
5. Run `npm run build` to build the library.
6. Run `npm test` to run the tests using Jest.

## Contribution

Pull requests and feature requests are welcome!

## Acknowledgements

- [es-check](https://github.com/dollarshaveclub/es-check) is under the hood to make this possible
