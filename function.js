function name1(name) {
  console.log(`this is ${name}`);
}

name1("Harish");

let name = (a) => {
  console.log("Arrow function");
};

name();

function multiple(a, b) {
  console.log(a * b);
  return a * b;
}

multiple(10, 8);

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 3));
