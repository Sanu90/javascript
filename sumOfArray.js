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

//USING RECURSION //

const array = [1, 2, 3, 4,98];

function addArrayRecursion(array) {
  if (array.length == 0) {
    return 0;
  }
  //console.log(array);
  return array.pop() + addArrayRecursion(array);
}

console.log(addArrayRecursion(array));
