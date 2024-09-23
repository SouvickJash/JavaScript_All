// sorting 
let arr=[5,8,23,90,6];
console.log(arr.length)
let temp;
for(let i=0;i<arr.length;i++){
   for(let j=i;j<arr.length;j++){
      if(arr[i]>arr[j]){
         temp=arr[i];
         arr[i]=arr[j];
         arr[j]=temp;
      }
   }
}
console.log(arr);


// check sort or not
let array=[1,2,3];
const isSorted=array.every((val,i,arr)=>!i || array[i-1] <=val)
console.log(isSorted);