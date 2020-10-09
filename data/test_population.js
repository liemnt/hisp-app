const fs = require("fs");

const data = JSON.parse(fs.readFileSync("family.json"));

const re = /^FI:\s+Family\s+members\s+[<>=0-9\+\-]+\s+year(s?)\s+(Male|Female)\s*$/;

const ageRe = /[<>=0-9\+\-]+/;

const sexRe = /(Male|Female)/;

const aggregatedData = data.headers.reduce((result, header, index) => {
  const validatedHeader = re.test(header.column);
  if (!validatedHeader) return result;
  const headerShortName = `${header.column.match(ageRe)[0]} - ${
    header.column.match(sexRe)[0]
  }`;
  const total = data.rows.reduce((total, value) => {
    total += +value[index];
    return total;
  }, 0);
  const age = header.column.match(ageRe)[0];
  const sex = header.column.match(sexRe)[0];
  result.push({
    headerShortName,
    total,
    header,
    age,
    sex
  });
  return result;
}, []);

const sexGroup = aggregatedData.reduce((result, value) => {
  result[value.sex] = (result[value.sex] || []).concat(value);
  return result;
}, {});

const getAgeRange = ageStr => {
  let [start, end] = ageStr.split("-");
  if (!end) {
    const age = +ageStr.match(/[0-9]+/)[0];
    let prefix = ageStr.match(/[+<>=]+(?=([0-9]+))/);
    prefix = prefix && prefix[0];
    let suffix = ageStr.match(/(?<=[0-9]+)[+<>=]+/);
    suffix = suffix && suffix[0];
    if (prefix === "<") {
      start = 0;
      end = age;
    } else if (suffix === "+") {
      start = age;
      end = 100;
    } else {
      start = age;
      end = age;
    }
  }
  return [start, end];
};

const ageSort = (a, b) => {
  let [aStart, aEnd] = getAgeRange(a.age);
  let [bStart, bEnd] = getAgeRange(b.age);
  if (aEnd === bEnd) {
    return aStart - bStart;
  }
  return aEnd - bStart;
};

Object.keys(sexGroup).map(key => {
  sexGroup[key].sort(ageSort);
});

console.log(sexGroup);
