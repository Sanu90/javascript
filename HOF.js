// map //

const array = [1, 2, 3, 4, 5];

let output = array.map((value) => {
  return value * value;
});

console.log(output);
console.log(array);

// forEach //

const array1=[0,9,8,7,6];
console.log(array1.forEach((value)=>{
    value+=5
}))
