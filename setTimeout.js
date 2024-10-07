// let i;
// setTimeout(() => {
//   for (i = 0; i < 100; i++) {
//     console.log(i);
//   }
// }, i * 1000);

function printNum(value){
  console.log(value);
  if(value<10){
    setTimeout(()=>{
      printNum(value+1);
    },1000)
  }
}


printNum(1);