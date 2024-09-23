// find second largest number
const number=[1,2,3,40,500,6,7,8];
const largest=Math.max(...number);
const secondLargestNumber=Math.max(...number.filter(num=>num !==largest));
console.log("The second largest number is:",secondLargestNumber)