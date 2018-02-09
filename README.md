# Alpha-Genesis

> Proxy for library-genesis, file-genesis, content-genesis

## [![Build Status](https://travis-ci.org/servexyz/alpha-genesis.svg?branch=master)](https://travis-ci.org/servexyz/alpha-genesis)

---

## Install

---

```
yarn add alpha-genesis
```

---

## Use

---

```js
import { Library, File, Content } from "alpha-genesis";
```

##### Library

> [library-genesis](https://github.com/servexyz/library-genesis) repository

```js
const { myLibConfig } = require("./path/to/my-config.js");
const { Library } = require("alpha-genesis");
Library(myLibConfig).generate();
```

##### File

> [file-genesis](https://github.com/servexyz/file-genesis) repository

```js
const path = require("path");
const { File } = require("alpha-genesis");
const gitignore = `
  .DS_Store
  node_modules
`;
let filepathPlain = path.join(__dirname, ".gitignore");
File(filepathPlain).plain(gitignore);
```

##### Content

> [content-genesis](https://github.com/servexyz/content-genesis) repository

```js
const { template } = require("alpha-genesis");
let foo = { variable1: "Foo", variable2: "Bar" };
let fooTemplate = template("/path/to/template", foo);
```

---

## Goal

---

* Prepare for subsequent CLI project
* Simplify imports for related projects utilizing the genesis module series.
* Provide buffer between independent versioning across multiple projects to mitigate hotpatch rollbacks on this project

---

## Docs

---

* [todo](./docs/todo.md)
  > Tasks by release version

---

## Related

---

* `library-genesis`

  > [@github](https://github.com/servexyz/library-genesis) | [@npm](https://www.npmjs.com/package/library-genesis)

- `file-genesis`

  > [@github](https://github.com/servexyz/file-genesis) | [@npm](https://www.npmjs.com/package/file-genesis)

- `content-genesis`

  > [@github](https://github.com/servexyz/content-genesis) | [@npm](https://www.npmjs.com/package/content-genesis)
