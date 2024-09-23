// some of natural number
function sum(num){
   if(num>0){
     return num+sum(num-1)
   }
   else{
    return num
   }
}
var number=sum(10)
console.log(number)