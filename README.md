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

### Import

```js
import { Library, File, Content } from "alpha-genesis";
```

#### Subsumed API Docs

##### Library

> [library-genesis](https://github.com/servexyz/library-genesis) repository

```js
const { myLibConfig } = require("./path/to/my-config.js");
const { Library } = require("library-genesis");
Library(myLibConfig).generate();
```

##### File

> [file-genesis](https://github.com/servexyz/file-genesis) repository

```js
const path = require("path");
const { File } = require("file-genesis");
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
const { template } = require("content-genesis");
let foo = { variable1: "Foo", variable2: "Bar" };
let fooTemplate = template("/path/to/template", foo);
```

---

## Why

---
