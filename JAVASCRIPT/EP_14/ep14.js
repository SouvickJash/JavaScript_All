
// setTimeout(function (){
//     console.log("Timer")
// },5000);

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//    console.log("y");
// })


function attachEventListners(){
  let count=0;
  document.getElementById("clickme").addEventListener("click", function xyz(){
    console.log("Button Clicked", ++count);
  })
}
attachEventListners()


