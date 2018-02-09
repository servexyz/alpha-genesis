const path = require("path");
let sandbox = __dirname;

let dirs = {
  d: "docs",
  t: "templates",
  o: "output"
};

let library = {
  directory: sandbox,
  files: [
    {
      type: "file",
      dest: `${sandbox}/${dirs.o}/${dirs.d}/README.md`,
      content: "#README"
    },
    {
      type: "symlink",
      dest: `${sandbox}/${dirs.o}/config.js`,
      content: {
        original: `${sandbox}/${dirs.t}/sample.template.js`
      }
    },
    {
      type: "template",
      dest: `${sandbox}/${dirs.o}/comp.js`,
      content: {
        original: `${sandbox}/${dirs.t}/sample.template.js`,
        variables: { component: "Foobar" }
      }
    }
  ]
};

module.exports = {
  con: library
};
