const nav1btn = document.querySelector("#navbarbutton1");
const nav2btn = document.querySelector("#navbarbutton2");
const nav3btn = document.querySelector("#navbarbutton3");
const nav4btn = document.querySelector("#navbarbutton4");
var allnavbtn = document.querySelector(".navbarbutton");

nav1btn.style.display = "none";
nav2btn.style.display = "none";
nav3btn.style.display = "none";
nav4btn.style.rotate = "0deg";

nav1btn.style.opacity = "0";
nav2btn.style.opacity = "0";
nav3btn.style.opacity = "0";


function show(test){
    let testfunction = document.querySelector("#navbarbutton"+ test);
    console.log(testfunction)
}
function open(){
    if(nav1btn.style.display != "flex"){

    nav1btn.style.display = "flex";
    nav2btn.style.display = "flex";
    nav3btn.style.display = "flex";
    nav4btn.style.rotate = "90deg";

    nav1btn.style.opacity = "1";
    nav2btn.style.opacity = "1";
    nav3btn.style.opacity = "1";


    } else{

    nav1btn.style.display = "none";
    nav2btn.style.display = "none";
    nav3btn.style.display = "none";

    nav1btn.style.opacity = "0";
    nav2btn.style.opacity = "0";
    nav3btn.style.opacity = "0";
    nav4btn.style.rotate = "0deg";

    }
}

nav1btn.addEventListener("click", function(){
    show(1);
});
nav2btn.addEventListener("click", function(){
    show(2);
});
nav3btn.addEventListener("click", function(){
    show(3);
});
nav4btn.addEventListener("click",function(){
    show(4);
    open();
});