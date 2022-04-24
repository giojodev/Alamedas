'use strict'

var login = document.getElementById("login");
var user = document.getElementById("txtUsuario");
var pass = document.getElementById("txtPassword");
var btnIngresar = document.getElementById("btnSubmit");

var auth = {
    login: document.getElementById("login");,
    pass: document.getElementById("txtPassword");
}

btnIngresar.addEventListener("click", () => {
    console.log(auth);
    fetch('localhost/Services/WSLogin.cs')
});
