// //ЗАДАНИЕ 1

let newArr = [1,2,3,4,4,5,0,0,'f'];
let chet = 0;
let neChet = 0;
let zero = 0;
for ( let i = 0; i< newArr.length;i++) {
  if (typeof newArr[i] === 'number' && !isNaN(newArr[i])) {
        if (newArr[i]=== 0) {
            zero+=1;
        } else if (newArr[i] % 2 === 0) {
            chet +=1; 
          
        } else {
          neChet+=1;
        }
    }
  }

console.log(chet);
console.log(neChet);
console.log(zero);
