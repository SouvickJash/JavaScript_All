// find index element
const array = [1,2,3,4,5,67];
const index = array.indexOf(67);
console.log(index);

// let arr=[5,8,23,90,6];
// console.log(arr.length)
// let temp;
// for(let i=0;i<arr.length;i++){
//    for(let j=i;j<arr.length;j++){
//       if(arr[i]>arr[j]){
//          temp=arr[i];
//          arr[i]=arr[j];
//          arr[j]=temp;
//       }
//    }
// }
// console.log(arr);

let arr=[1,2,3];
const isSorted=arr.every((val,i,arr)=>!i || arr[i-1] <=val)
console.log(isSorted);