//Spread

// const array=[1,'a',10,'bag',25,'cotton'];
// const b=[...array];
// console.log(array);
// console.log(b);



// const tea=['t','e','a'];
// const bag=['b','a','g'];
// const cup=[...tea,...bag];
// console.log(cup);


let object1={
    name:'prasad', age: 31
}
let object2={
    city:'mumbai', job: 'marketer'
}

let object3={...object1,...object2};
console.log(object3);