function getAllPropValues(array, prop) {
  "use strict";
  let result = [];
  for (const arr of array) {
    console.log(arr);
    // const keys = Object.keys(arr);
    // console.log(keys);
    const ttt = prop in arr;
    console.log(ttt);
    if (prop in arr) {
      result.push(arr[prop]);
    }
    // console.log(arr[prop]);
    // result.push(arr[prop]);
  }
  return result;
  // Write code under this line
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, "name"));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity"));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, "category"));
//  []
