'use strict'

var login = document.getElementById("login");
var user = document.getElementById("txtUsuario");
var pass = document.getElementById("txtPassword");
var btnIngresar = document.getElementById("btnSubmit");

btnIngresar.addEventListener("click", () => {
    console.log(user.value, pass.value);
});
