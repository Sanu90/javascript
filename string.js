const str = "ab ki bar 400 par";
//console.log(str.length);

const arr = str.split(" ");
const res = arr.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});
const output = res.join("").padEnd(14, "#");
console.log(output);
