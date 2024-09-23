
// letter count
const sample="souvickk";
const output={};

for(let count of sample){
    if(output[count]){
       output[count]++;
    }
    else{
        output[count]=1
    }
}
console.log(output)