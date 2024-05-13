const map = new Map([
  ["a", 1],
  ["b", 10],
]);

for (const [key, value] of map) {
  console.log(`${key}:  ${value}`);
}

map.set('c',12);
console.log(map.has("c"));

map.clear()
console.log(map);