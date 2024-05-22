let array = [1, 1, 0, 1, 0, 2, 3, 0, 0, 0];

function mostOccur(array) {
  let count;
  let max = 0;
  let value;
  for (let i = 0; i < array.length; i++) {
    count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      value = array[i];
    }
  }
  return value;
}

console.log(mostOccur(array));
