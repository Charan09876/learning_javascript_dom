var cursor = document.querySelector("#cursor");

var main = document.querySelector("html");

main.addEventListener("mousemove", function(val1){
    cursor.style.left= val1.x+ "px";
    cursor.style.top= val1.y+ "px";
});