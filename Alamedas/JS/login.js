'use strict'


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
            console.log(data.d);
            const obj = $.parseJSON(data.d);
            console.log(obj);
            $("#tablaTopMora").DataTable({
               'bDestroy':true,
               dom: 'Bfrtip',
                data: obj,
                columns: [
                    {
                        data:'CONDOMINO'
                    },
                    {
                        data:'Mora'
                    }
                                ]
            });
        },
        failure: function(response) {
            console.error(response);
        }
    });

    
    //$("#tablaTopMora").DataTable({
    //    "ajax": {
    //        type: "POST",
    //        dataType: "json",
    //        data: "results",
    //        contentType: "application/json;charset=uft-8",
    //        url: "../Pages/Inicio.aspx/GetTopMora"
    //    }
    //}
    //);
    
}