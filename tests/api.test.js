const chalk = require("chalk");
const path = require("path");
const { File } = require("alpha-genesis");
const log = console.log;
const output = path.join(__dirname, "sandbox/output");
const fs = require("fs");
function fileExists(filepath) {
  try {
    fs.accessSync(filepath, fs.constants.F_OK);
    return true;
  } catch (err) {
    return err;
  }
}
test("File proxied", () => {
  const gitignore = `
    .DS_Store
    node_modules
  `;
  let filePathPlain = path.join(output, ".gitignore");
  File(filePathPlain).plain(gitignore);
  let out = fileExists(filePathPlain);
  expect(out).toBe(true);
});

// test("Library proxied", () => {
//   const { Library } = require("../index.js");
// });
