const faqs = [
  {
  question:'이 강의는 어떤 내용을 다루나요?',
  answer:'웹 퍼블리싱 및 프론트엔드 개발에 필요한 실무 기술을 다룹니다'
  },
  {
  question:'수업 자료는 어디서 보나요?',
  answer:'모든 수업 자료는 노션 페이지를 통해 제공됩니다'
  },
  {
  question:'포트폴리오 제작은 포함되나요?',
  answer:'실무형 클론 코딩과 개인 창작 프로젝트를 통해 완성됩니다'
  },
  {
  question:'수업 중 평가가 있나요?',
  answer:'각 강의 과목마다 평가 과제가 있습니다. 제출 기한내에 제출해야 평가 점수가 반영됩니다'
  },
  {
  question:'AI 도구는 활용되나요?',
  answer:'AI 디자인 도구를 활용하여 이미지를 생성합니다'
  }
];

//p태그를 만들어서 추가하는 함수
  const createElem_ptag = (txt,clsName) => {
  const elem = document.createElement('p');
  elem.textContent = txt;
  elem.className =clsName;
  return elem;

}


//faq를 이용한 ul > li로 구성
const ulElem = document.createElement('ul');
faqs.forEach((list)=>{
 const liElem = document.createElement('li');
//  const qElem = document.createElement('p');
//  qElem.textContent = list.question;
//  qElem.className = 'qustion';
//  const aElem = document.createElement('p');
//  aElem.textContent=list.answer;
//  aElem.className= 'answer';
//  liElem.append(qElem);
//  liElem.append(aElem);

 const qElem = createElem_ptag(list.question,'question');
 const aElem = createElem_ptag(list.answer,'answer');
//qElem을 클릭하면 aElem에 class가 추가
qElem.addEventListener('click',()=> {
aElem.classList.toggle('show');
});

liElem.append( qElem );
liElem.append( aElem );
ulElem.append( liElem );
});
document.body.append(ulElem);