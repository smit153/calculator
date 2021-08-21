
function dis(val)
{
    document.getElementById("screen").value+=val
    console.log("hello");
}
  
//function that evaluates the digit and return screen
function solve()
{
    let x = document.getElementById("screen").value
    let y = eval(x)
    document.getElementById("screen").value = y
    
}
  
//function that clear the display
function clrAll()
{ 
 
  document.getElementById("screen").value = ""
   
}
function clr()
{ 
  
  document.getElementById("screen").value =document.getElementById("screen").value.slice(0, -1);

   
}
var input = document.getElementsByClassName("screen");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});