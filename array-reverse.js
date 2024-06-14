// reverse an array //
const array = [1, 2, 3, 4, 5];

// function reverseArray1(array, left, right) {
//   if (left >= right) {
//     return array;
//   }
//   if (left <= right) {
//     let temp = array[left];
//     array[left] = array[right];
//     array[right] = temp;
//   }

//   return reverseArray1(array, left + 1, right - 1);
// }
// console.log(reverseArray1(array, 0, array.length - 1));

// function reverseArray2(array, left, right) {
//   if (left >= right) {
//     return array;
//   }

//   [array[left], array[right]] = [array[right], array[left]];

//   return reverseArray2(array, left + 1, right - 1);
// }

// console.log(reverseArray2(array, 0, array.length - 1));

// -----> Recursion <-------- //

let newArray = [];
function reverseArrayRecursion(array, newArray) {
  if (array.length < 1) {
    return newArray;
  }
  newArray.push(array.pop());
//   console.log(array);
//   console.log(newArray);
  return reverseArrayRecursion(array, newArray);
}

console.log(reverseArrayRecursion(array, newArray));
