// find the second largest element //

let array = [10, 26, 21, 20, 37, 14]; // [10,14,20,21,26,37]

function secondLargest(array) {
  let largest = array[0];
  let secondLargest = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] < largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest(array));
