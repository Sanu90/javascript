// find the largest element in the array w/o sorting //

let array = [18, 6, 13, 7, 1, 4, 14, 5];

function largestNumber(array) {
  let large = array[0];
  let index = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > large) {
      large = array[i];
      index = i;
    }
  }
  return [large, index];
}

//console.log(largestNumber(array));

// find the smallest element in the array w/o sorting //

function smallestNumber(array) {
  let small = array[0];
  for (let num of array) {
    if (num < small) {
      small = num;
    }
  }
  return small;
}

console.log(smallestNumber(array));
