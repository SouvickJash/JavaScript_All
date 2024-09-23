// function x(){
//     var i=10;
//     setTimeout(function(){    //callback function
//         console.log(i)
//     },2000)
//     console.log("Souvick Jash")
// }
// x();   //calling this funation.



// another example of setTimeOut  like let
// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function (){
//             console.log(i)
//         },i * 1000)
//     }   
//     console.log("souvickjash")
// }
// x();




//its possible in same memory space in var keyword
function x(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(function (y){
                console.log(x)
            }, x*1000)
        }
        close(i)
    }
    console.log("Hello");
}
x();
// yes its possible bcz the close function has create a new copy of value


