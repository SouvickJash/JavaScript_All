// count occurrence element
const array=['a','b','c','d','a','a','b'];
const counts=array.reduce((acc,curr)=>{
    acc[curr]=(acc[curr] || 0)+1;
    return acc;
},{})
console.log(counts)