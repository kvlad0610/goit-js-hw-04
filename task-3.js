const findBestEmployee = function (employees) {
  "use strict";
  // console.table(employees);
  // Write code under this line
  const keys = Object.keys(employees);
  console.log(keys);
  // const values = Object.values(employees);
  const max = Math.max(...Object.values(employees));
  console.log(max);

  for (const key of keys) {
    // console.log(key);
    // console.log(employees[key]);
    if (employees[key] === max)
      // let values = employees[key];

      // if (values < employees[key]) {
      //   values = employees[key];
      //   console.log(values);
      // }
      return key;
    // let value = 0;
    // console.log(value);
    // if (value < employees[key]) {
    //   value = employees[key];
    //   console.log(value);
    // }
  }
  return ``;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
