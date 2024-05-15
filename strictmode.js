function add(a, b, c) {
  "use strict";
  a = 9;
  b = 1;
  return arguments[0] + arguments[1];
}

console.log(add(2, 3, 4));

// function add() {
//   console.log(arguments[0]);
//   console.log(arguments[2]);
// }

// console.log(add(5, 10));
