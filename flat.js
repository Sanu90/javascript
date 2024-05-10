// array flat method //

const array = [1, 2, 3, 4, [5, 6], [7, 8, 9], 10];

let flatArray = array.flat();
console.log(flatArray);

// flat method does not flats the nested arrays inside.

const array1 = [1, 2, 3, 4, [5, 6, [7, 8], 9], 10];

let flatArray1 = array1.flat(Infinity);
console.log(flatArray1);

// If we use Infinity inside the flat method argument, it joins the nested arrays together to form a new array.