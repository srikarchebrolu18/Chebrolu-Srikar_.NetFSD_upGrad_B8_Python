let button = document.getElementById("btn");
let meesage  = document.getElementById("output");

button.addEventListener("click",show);

function show() {
    meesage.textContent = "clicked";
    console.log("Button was clicked");
}