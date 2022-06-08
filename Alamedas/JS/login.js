'use strict'


window.onload = (event) => {
    getDashboard();
    
}

function getDashboard() {
    var datatable;
    $.ajax({
        type: "POST",
        url: "../Pages/Inicio.aspx/GetTopMora",
        contentType: "application/json;charset=uft-8",
        dataType: "json",
        success: function (data) {
            console.log(data);
            const obj = jQuery.parseJSON({ data });
            //const obj = data;
            console.log(obj);
        },
        failure: function(response) {
            console.error(response);
        }
    });

    console.log(datatable);
    //$("tablaTopMora").DataTable();
    
}