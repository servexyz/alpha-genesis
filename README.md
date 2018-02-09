# Alpha-Genesis

> Shim for library-genesis, file-genesis, content-genesis

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

* Simplify imports for related projects utilizing the genesis module series.
* Prepare for subsequent CLI project

---

## Docs

---

* [todo](./docs/todo.md)
  > Tasks by release version
