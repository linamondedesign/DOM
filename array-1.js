
/* 배열 객체의 4총사
 * 고차 메서드 : 함수를 인자로 받거나, 함수를 반환하는 메서드
 * (High-order method)
 * forEach, map, filter, reduce
 */
const colors=['red','purple','green','blue','black'];
// for(let i=0 ; i<colors.length; i++){
//   console.log(colors[i]); 
// }
colors.forEach((_,idx)=>);{
};
  //{
//forEach는 각 요소를 순서대로 꺼내서 실행, 출력용
  // console.log(`${idx}번째 색상은 ${color}입니다`);
// }
//map : 새로운 배열을 만들어 줍니다.
//const addColors = colors.map((value)=>{
//return value+'-1'; 

const addColors = colors.map(value=>value+'-1');
console.log( colors );
console.log( addColors );

//filter : 조건에 맞는 요소만 새 배열로 반환
//         조건식이 참인 경우
const longColors = colors.filter((color)=>{
  return color.length>=5;
});
console.log( longColors );

//reduce : 누적 계산 값을 만듦(합계,문자열 결합)
const numbers = [4,6,2,7];
// let sum = 0;
// for(let i=0 ; i<numbers.length; i++ ){
//   sum += numbers[i];
// }
// console.log( sum );
const total = numbers.reduce((sum,i)=>{
  return sum+i; 
},0);
console.log( 'total=',total );