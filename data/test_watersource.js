const fs = require("fs");

const data = JSON.parse(fs.readFileSync("family.json"));

const re = /deliver/i;

console.log(
  data.headers
    .filter(header => re.test(header.column)).length
);
