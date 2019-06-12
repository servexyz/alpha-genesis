import test from "ava";
const chalk = require("chalk");
const path = require("path");
const { File } = require("../index");
const log = console.log;
const sandbox = path.join(__dirname, "sandbox");
const output = path.join(sandbox, "output");
const fs = require("fs");

function fileExists(filepath) {
  try {
    fs.accessSync(filepath, fs.constants.F_OK);
    return true;
  } catch (err) {
    return err;
  }
}
test("File proxied", t => {
  const gitignore = `
    .DS_Store
    node_modules
  `;
  let filePathPlain = path.join(output, ".gitignore");
  File(filePathPlain).plain(gitignore);
  let out = fileExists(filePathPlain);
  t.true(out);
});

test("Library proxied", t => {
  const { con } = require(`${sandbox}/library.config.sample.js`);
  const { Library } = require("../index.js");
  Library(con).generate();
  t.pass();
});

test("Content.template proxied", t => {
  const { template } = require("../index.js");
  let variables = { component: "Foobar" };
  template(`${sandbox}/templates/sample.template.js`, variables);
  t.pass();
});
