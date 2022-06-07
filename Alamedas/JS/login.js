'use strict'

//window.addEventListener('load', (event) = {
//    console.log('The page has fully loaded');
//})
window.onload = (event) => {
    getDashboard();
    
}

function getDashboard() {
    debugger;
    $.ajax({
        type: "POST",
        url: "../Pages/Inicio.aspx/GetTopMora",
        contentType: "application/json;charset=uft-8",
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        failure: function(response) {
            console.error(response);
        }
    });
    //$("tablaTopMora").DataTable();
    
}