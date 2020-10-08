const fs = require("fs");

const data = JSON.parse(fs.readFileSync("family.json"));

const re = /Insurance/i;

console.log(
  data.headers
    .filter(header => re.test(header.column))
    .map(header => ({
      id: header.name,
      name: header.column
    }))
);

console.log(
  data.headers
    .filter(header => re.test(header.column))
    .map(header => header.name)
);
