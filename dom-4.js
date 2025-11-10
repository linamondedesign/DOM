const liElem = document. querySelectorAll('ul>li');
// console.log( liElem);
const showImg = (num)=> {
  //이미지 태그의 src 경로를 바꾸기
  //1. 요소를 가져오기
  const imgElem  = document.querySelector('img');
  console.log( imgElem );
  imgElem.src = `./images/img-0${num}.png`;
  //모든 li에서 백그라운드를 원상 복귀
  for( let i=0; i <liElem.length; i++){
    liElem[i].style.backgroundColor = '#ddd';
  }
  //입력된 num-1의 list의 백그라운드르 바꿔야 함.
  liElem[num-1].style.backgroundColor = '#222';
}
const init = ()=> {
   liElem[0].style.backgroundColor = '#222';
}
init(); //처음 실행되는 함수