let submit=document.getElementById("submit")
submit.addEventListener("click",function(){
    let username=document.getElementById("username").value
    let pass=document.getElementById("password").value
    let message=document.getElementById("error-text")

    if(username=="admin" && pass=="admin123#"){
        window.location.href="NavMenu.html"
        return false
    }
    else {
        message.textContent="Incorrect ID or password";
    }
})