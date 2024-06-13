// find the total sum of array //

// let array = [
//   { cat: [10, 20, 30, 40] },
//   { cat: [1, 2, 3, 4] },
//   { cat: [9, 6, 7, 8] },
// ];

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i].cat.reduce((a, b) => {
//     return a + b;
//   }, 0);
// }
// console.log(sum);

let array1 = [
  {
    ab: 1,
    cat: [2, 3, 4],
  },
  {
    ab: 10,
    cat: [20, 30, 40],
  },
];
let sum = 0;
for (let i = 0; i < array1.length; i++) {
  sum =
    array1[i].ab +
    array1[i].cat.reduce((a, b) => {
      return a + b;
    }, 0);
}
console.log(sum);
