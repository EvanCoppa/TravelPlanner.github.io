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


function clearSearch() {
   document.getElementById("search").value = "";
 }

 function fillSearch(){
    document.getElementById("search").value = "Search..";

 }