// You are given a string of digits as input, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the result in a string.
// Example: input=> '' ; output => '01011110001100111'
// Test Cases: '509321967506747' , '366058562030849490134388085' , '45385593107843568'
// Write your code inside the function.

const str = '45385593107843568'
const fakeBin = (x) => x.split('').map(x => x < 5 ? '0' : '1').join('')

console.log(fakeBin(str))