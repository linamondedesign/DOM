/**
 * 객체:사물의 모든 것
 * 구성: {키:값, 키:값, 키:값, 키:함수()}
 * -프로퍼티:key:value는 구성 
 * -메서드:값이 함수인 프로퍼티 
 */

/*
const user = {
  id : 101, 
  user_name : 'hong'
  isAdmin: false,
  sayHi: (txt)=> { console.log('안녕하세요'+txt);
  }
}
console.log( user.user_name );
console.log( user.sayHi('길동'));
console.log( user.sayHi('춘향'));

const person = {};
const key = 'phone';
person['first'] = 'gil-dong';
console.log( person );
person[key]= '010-000-0000';
console.log( person);

//복사, ...(스프레드), 구조분해*/
// const a ={
//   gubun : 'A',
//   info : {
//     city :'seoul', 
//     desc : '수도'
//   }
// }
const b = a;
// console.log( 'a'=,a );
// console.log( 'b'=,b );
//a의 gubun의 값을 변경
//깊은 복사 : 원본의 영향을 받는다.
a.gubun = 'B';
// console.log( 'a'=,a );
// console.log( 'b'=,b );

//얇은 복사...
// const c = {...a};
// a.gubun = 'c';
// console.log( 'a=', a );
// console.log( 'b=', b );
// console.log( 'c=', c );

// console.log( a.gubun );
// console.log( a.info.city );
// 구조분해
const {gubun,info:{city}} = a;
console.log ( gubun );
console.log ( city );

const user = {
  id : 101, 
  user_name : 'hong',
  isAdmin: false,
  sayHi: (txt)=> { console.log('안녕하세요'+txt);}
}
// const {id,user_name,sayHi} = user;
// console.log( id );
// console.log( user_name);
// console.log( sayHi('복사'));

//user_name 변수로 복사 나머지는 객체 복사
const { user_name, ...rest } = user;
console.log( user_name );
console.log( rest );