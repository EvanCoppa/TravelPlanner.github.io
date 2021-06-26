var open;

function closeNav() {
   if (open) {
    var element = document.getElementById("sidenav");
    element.style.transition = "all 1s ease";
    element.style.transform = "translate(-100%, 0%)";
    element = document.getElementById("topnav");
    element.style.transition = "all 1s ease";
    element.style.left = "0px";
    element = document.getElementById("content");
    element.style.transition = "all 1s ease";
    element.style.width = "100vw";
    open = false;
  } else {
    var element = document.getElementById("sidenav");
    element.style.transition = "all 1s ease";
    element.style.transform = "translate(0%, 0%)";
    element = document.getElementById("topnav");
    element.style.transition = "all 1s ease";
    element.style.left = "10vw";
    element = document.getElementById("content");
    element.style.transition = "all 1s ease";
    element.style.width = "90vw";
    open = true;
  }
}

 let isClicked = [false, false, false, false];


function clearSearch() {
   document.getElementById("search").value = "";
 }

 function fillSearch(){
    document.getElementById("search").value = "Search..";

 }

 function rotateArrow(num) {
  if(isClicked[parseInt(num - 1)] == false){
  
 

  var arrow = document.getElementById("Arrow " + num);
 arrow.style.transform = "rotate(90deg)";
 isClicked[parseInt(num - 1)] = true;
 }else{
  var arrow = document.getElementById("Arrow " + num);
  arrow.style.transform = "rotate(360deg)";
  isClicked[parseInt(num - 1)] = false;

 }

  }