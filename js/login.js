"use strict"
const form = document.querySelector("form.login__form")
const divError = document.querySelector("div.login__error");
const iconTogglePass = document.querySelector("#togglePass");


iconTogglePass.addEventListener("click", () => {

    const password = document.querySelector("#password");

    if (password.type == "password") {
        password.type = "text";
        iconTogglePass.className = "fas fa-eye-slash";
    } else if (password.type == "text") {
        password.type = "password";
        iconTogglePass.className = "fas fa-eye";
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    validarCredenciales(email.value, password.value);
});

async function validarCredenciales(email, password) {
    try {
        const response = await fetch(`https://b389-38-252-237-86.ngrok-free.app/api/user/validate?email=${email}&password=${password}`, {
            method: "Post"
        }
        );
        const data = await response.text();
        console.log(data);
        if (response.ok) {
            window.location.href = "/admin.html";
            sessionStorage.setItem("user",data)
        } else {
            divError.innerHTML = "Credenciales Incorrectas";
            divError.style.display = "block";
        }
    } catch (error) {

        divError.innerHTML = "Error de Conexion. Intentalo de nuevo";
        divError.style.display = "block";
    }
}