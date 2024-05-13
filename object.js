const obj = {
  name: "kavya",
  age: 23,
  "abcd-efgh": "set",
  getName: function () {
    console.log(this.age);
  },
};

// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj["abcd-efgh"]);

// obj.father = "Manohar";

// console.log(obj);

// delete obj.age;
// delete obj["abcd-efgh"];
// console.log(obj);

// obj.getName();
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
