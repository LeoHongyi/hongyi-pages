# hongyi-pages

[![Build Status][travis-image]][travis-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> cli

## Installation

```shell
$ yarn add hongyi-pages

# or npm
$ npm install hongyi-pages
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const hongyiPages = require('hongyi-pages')
const result = hongyiPages('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### hongyiPages(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; hongyiliu <wenhualiu.liu@gmail.com>



[travis-image]: https://img.shields.io/travis/leohongyi/hongyi-pages/master.svg
[travis-url]: https://travis-ci.org/leohongyi/hongyi-pages
[downloads-image]: https://img.shields.io/npm/dm/hongyi-pages.svg
[downloads-url]: https://npmjs.org/package/hongyi-pages
[version-image]: https://img.shields.io/npm/v/hongyi-pages.svg
[version-url]: https://npmjs.org/package/hongyi-pages
[license-image]: https://img.shields.io/github/license/leohongyi/hongyi-pages.svg
[license-url]: https://github.com/leohongyi/hongyi-pages/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/leohongyi/hongyi-pages.svg
[dependency-url]: https://david-dm.org/leohongyi/hongyi-pages
[devdependency-image]: https://img.shields.io/david/dev/leohongyi/hongyi-pages.svg
[devdependency-url]: https://david-dm.org/leohongyi/hongyi-pages?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
