// const obj = {
//   name: "kavya",
//   age: 23,
//   "abcd-efgh": "set",
//   getName: function () {
//     console.log(this.age);
//   },
// };

// // console.log(obj.name);
// // console.log(obj["age"]);
// // console.log(obj["abcd-efgh"]);

// // obj.father = "Manohar";

// // console.log(obj);

// // delete obj.age;
// // delete obj["abcd-efgh"];
// // console.log(obj);

// // obj.getName();
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// // console.log(Object.entries(obj));

// const obj = {
//   name: "hello",
//   age: 23,
//   isAdmin: false,
// };

// console.log(obj.age);

// CREATE OBJECT USING NEW KEYWORD //

const obj = new Object();
obj.name = "hello";

function add(a, b) {
  return a + b;
}
console.log(add(4, 5));

obj.age = 100;

console.log(obj.age);
