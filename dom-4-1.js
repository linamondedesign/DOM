/**
 * 반복을 이용해서 click 처리
 * class로 list의 백그라운 컬러 변경
 */
const imgElem = document.querySelector('img');
const liElem = document.querySelectorAll('ul>li');
// console.log( liElem);
const showImg = (num) => {
  imgElem.src=`./images/img-0${num}.png`;
}
const init = ()=> {
  for( let i=1; i<6; i++){
    liElem[i-1].onclick = ()=>{
       imgElem.src=`./images/img-0${i}.png`;
       //이전에 이미 show라는 클래스가 들어간 항목을 찾습니다
       const preElem = document.querySelector('.show');
       //첫번째 class show가 없을 경우 발생
       if ( preElem){
        preElem.className='';
       }
       liElem[i-1].className = 'show';
    } 
  }
}
init();
