//1.버튼이 클릭했을 때
//2. 이미지 속성을 변경 : src
const btnElem = document.querySelector("button");
const imgElem = document.querySelector("img");
// console.log(btnElem);
let count = 1;
const handleClick = () => {
  count++;
  //count 값이 6이 되면 count=1로 변경
  if( count >=6) {
    count=1;
  }
  imgElem.src = `./images/img-0${count}.png`;
};
btnElem.onclick = handleClick;
