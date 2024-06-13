// normal method.

// let array1=[10,2,3,4]
// let sum=0;
// function addArray(array1){
//     for(let i=0;i<array1.length;i++){
//     sum+=array1[i];
// }
//  return sum;
// }
// console.log(addArray(array1))

//SUM OF AN ARRAY USING RECURSION//

const array = [1, 2, 3, 4, 5];
function arraySum(array) {
  if (array.length == 0) {
    return 0;
  }
  return array.pop() + arraySum(array);
  //return sum;
}

console.log(arraySum(array));
