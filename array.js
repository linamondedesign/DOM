/**
 * 배열 객체
 * 배열 : 순서가 있는 데이터의 묶음
 *  [a, b, c]
 * index = 0부터 시작을 합니다.
 */
const colors = ['red','green','blue'];
// console.log( colors[0]);
//끝에 추가(push). 제거(pop)
const data = colors.pop();
colors.push('black');
// console.log( colors );


//배열
const arr = [1,2,3];
//생성자에 의해서 생성 : new
const arr1 = new Array(3);
// console.log( arr1 );
//배열 변환
const arr2 = Array.from('abc');
// console.log( arr2 );

//맨 끝에 추가/제거 : push, pop
//맨 앞에 추가/제거 :/ unshift()shift
//중간 추가/제거/변경  : splice()
let colors = ['red', 'green', 'blue'];
colors.unshift('black');
// console.log( colors );
let result = colors.shift();
// console.log( result );
// console.log( colors );
//splice 삭제
// result = colors.splice(1,2);
//pop
// result=colors.splice(colors.length-1, 1);
//splice를 이용한 추가
colors.splice(1,0,'black');
console.log( colors );
//black을 purple 변경
colors.splice(1,1,1);
console.log( colors );

//배열에서 위치값을 찾을 때
result = colors.indexOf('orange');
//값이 있는지 없는지
result = colors.includes('red');
console.log( result );

