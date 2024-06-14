//find the maximum and minimum value using recursion //

let array = [10, 27, 25, 14, 19, 28]; // 10,14,19,25,27,28

function maxMinRecursion(array, i, max, min) {
  if (i == array.length) {
    return [max, min];
  }
  max = Math.max(max, array[i]);
  min = Math.min(min, array[i]);

  return maxMinRecursion(array, i + 1, max, min);
}

console.log(maxMinRecursion(array, 0, 0, Infinity));
