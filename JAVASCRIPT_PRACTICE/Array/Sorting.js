// sorting array
const arr=[2,6,3,9,4,7];
// console.log(arr.length);
let temp;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]<arr[j]){
            temp=arr[i],
            arr[i]=arr[j],
            arr[j]=temp
        }
    }
    
}
console.log(arr)