// let str = "javascript";

// function caps(str) {
//   return (
//     str[0].toUpperCase() +
//     str.substring(1, str.length - 1) +
//     str[str.length - 1].toUpperCase()
//   );
// }

// console.log(caps(str));

let name = "sanup divakaran";

let words = name.split(" ");
//console.log(words.length)
for (let i = 0; i < words.length; i++) {
  console.log(words[i].charAt(0).toUpperCase() + words.join(""));
}
