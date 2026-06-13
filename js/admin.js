window.addEventListener("DOMContentLoaded",()=>{
    const item = sessionStorage.getItem("user");
    if(!(item == "Usuario Valido")){
        window.location.href = "/login.html"
    }
})

window.addEventListener("unload",()=>{
    sessionStorage.clear();
})