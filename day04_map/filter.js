//JavaScript, the .filter() method is used on arrays to create a new array containing only the elements 
//that satisfy a specific condition (returning true from a callback function).

const number = [1,2,3,4,5,6,7,8,9,0];

const ans = number.filter(num => num % 2 ==0);

console.log(ans);


