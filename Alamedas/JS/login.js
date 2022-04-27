'use strict'

var login = document.getElementById("login");
var btnIngresar = document.getElementById("btnSubmit");




btnIngresar.addEventListener("click", () => {
    let prueba="test"
    var auth = {
        login: document.getElementById("txtUsuario").value,
        pass: document.getElementById("txtPassword").value
    }
    console.log(auth);
    //const peticion = { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: 'Test' }
    //fetch('localhost:44326/Services/WSLogin.asmx/AuthLogin', peticion).catch(error => { console.error('Ha ocurrido un error', error); });
    fetch('Login.aspx/AuthLogin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json','Content-Type': 'application/json',
        },
        body: JSON.stringify(prueba),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    }).catch((error) => {
        console.log("Error", error);
    });
});
