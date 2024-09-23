// sort array object
const array=[
    {name:"souvick",age:23},
    {name:"arup",age:50},
    {name:"ram",age:57},
    {name:"sayan",age:3}
]
array.sort((a,b)=>a.age-b.age);
console.log(array)