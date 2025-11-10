/**
 * 일정시간 뒤에 실행 : 시간에 의한　반복여부
 * setTimeout(); 1s = 1000ms
 * setInterval();
 */
// const timer=setTimeout(()=>{
//   console.log("3초뒤에 한번만 실행");
// },3000);
// clearTimeout(timer);
let count=0;
const loop = setInterval(()=>{
  console.log(`반복':${count++}`);
  if( conunt >=5){
    clearInterval(loop);
  }
  console.log('3초마다 실행');
},3000);
// clearInterval(loop);