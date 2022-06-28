'use strict'

window.onload = (event) => {
    getCondominos();
}

function getCondominos() {
    $.ajax({
        type: "POST",
        url: "../Pages/Condominos.aspx/GetCondominos",
        contentType: "application/json;charset=uft-8",
        dataType: "json",
        success: function (data) {
            console.log(data.d);
            const obj = $.parseJSON(data.d);
            console.log(obj);
            $("#tablaCondomino").DataTable({
                'bDestroy': true,
                dom: 'Bfrtip',
                data: obj,
                columns: [
                    {
                        data: 'ID_CONDOMINO'
                    },
                    {
                        data: 'NOMBRE_COMPLETO'
                    },
                    {
                        data: 'NOMBRE_INQUILINO'
                    },
                    {
                        data: 'CORREO'
                    },
                    {
                        data: 'TELEFONO'
                    },
                    {
                        data: 'ACTIVO'
                    }
                ]
            });
        },
        failure: function (response) {
            console.error(response);
        }
    })
}