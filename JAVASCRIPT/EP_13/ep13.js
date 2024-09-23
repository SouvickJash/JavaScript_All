// document.getElementById("demo").addEventListener("click", function abc(){
//     console.log("Button clicked");

let count=0;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("demo").addEventListener("click", x);
    
    function x() {
       
        console.log("Button clicked",++count);
    }
});
