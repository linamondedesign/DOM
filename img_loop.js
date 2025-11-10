//요소선언
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderElem = document.querySelector('.slider');
const stopBtn = document.querySelector('.stop');
const playBtn = document.querySelector('.play');

//변수선언
let count = 1;
const MAX_SIZE = sliderElem.children.length + 2;
const MAX_WIDTH = MAX_SIZE*300;
let timer = null;

//버튼 비활성화 함수
const disableButton = ()=> {
  prevBtn.style.pointerEvents = 'none';
  nextBtn.style.pointerEvents = 'none';
}
//버튼 활성화 함수
const enableButtons =()=> {
  prevBtn.style.pointerEvents = 'auto';
  nextBtn.style.pointerEvents = 'auto';
}

//prev 버튼 처리될 때 실행되는 함수
const handleprevClick = () => {
  if (count <= 0) {
    return;
  }
  disableButton(); //클릭하면 바로 비활성화
  count--;
  sliderElem.style.transition = ".5s";
  sliderElem.style.left = `-${count * 100}%`;
};
//멈춤버튼을 누르면 자동 실행이 멈추고
stopBtn.addEventListener('click',()=>{
  clearInterval(timer);
});
//플레이버튼을 누르면 자동 실행
playBtn.addEventListener('click',()=>{
  timer = setInterval(handleNextClick,3000);
});
//next버튼 처리될 때 실행되는 함수
const handleNextClick = () => {
  if (count >=MAX_SIZE) {
    return; //break, continue
  }
  count++;
  // if( count > 5 ) {
  //   count=5;
  // }
  //sliderElem의 위치값 변경:left :-100%
  sliderElem.style.transition = ".5s";
  sliderElem.style.left = `-${count * 100}%`;
};

//prev버튼을 클릭했을 때
prevBtn.addEventListener("click", handleprevClick);
//next버튼을 클릭 했을 때
nextBtn.addEventListener("click", handleNextClick);

//css에서 트랜지션이 끝났을 때 발생되는 이벤트
//transitionend
sliderElem.addEventListener("transitionend", () => {
  //순간 이동처리 마지막 count 5가 되면 첫번째로
  if (count === MAX_SIZE-1) {
    sliderElem.style.transition = "none";
    count = 1;
    sliderElem.style.left = `-${count * 100}%`;
  }


  //순간 이동처리 맨 앞이 0번이 보여지면 이동
  if ( count ===0 ) {
      sliderElem.style.transition = 'none';
      count = MAX_SIZE-2;
      sliderElem.style.left = `-${count*100}%`;
  }
  //트랜지션 처리가 완료되면 버튼을 다시 활성화
  enableButtons();
});

//시작되자마자 실행되는 함수
const init = () => {
  //슬라이더 width 값을 변경
  sliderElem.style.width = `${MAX_WIDTH}px`;
  //맨 뒤에 1번을 복제해서 추가
  const firstClone = sliderElem.children[0].cloneNode(true);
  sliderElem.append(firstClone);
  //맨 앞에 5번을 복제해서 추가
  const lastClone = sliderElem.children[4].cloneNode(true);
  sliderElem.prepend(lastClone);

  //1번 이미지가 보여지는 상태
    sliderElem.style.left = `-${count * 100}%`;
  // //무한 반복 실행
  // setInterval(handleNextClick,1000);
};

init(); //시작되면 바로 함수 호출
