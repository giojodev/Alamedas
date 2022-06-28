<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage/Site1.Master" AutoEventWireup="true" CodeBehind="Condominos.aspx.cs" Inherits="Alamedas.Pages.Condominos" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" type="text/css" href="../JS/datatables.min.css"/>
    <link href="../JS/DataTables-1.12.1/css/dataTables.bulma.css" rel="stylesheet" />
    <script src="../JS/jquery-3.6.0.min.js"></script>
    <script src="../JS/Condomino.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="espacioTabla" >
        
            <table id="tablaCondomino" class="table is-striped">
                <thead>
                  <tr>
                     <th>ID_CONDOMINO</th>
                     <th>NOMBRE_COMPLETO</th>
                     <th>NOMBRE_INQUILINO</th>
                     <th>CORREO</th>
                     <th>TELEFONO</th>
                     <th>ACTIVO</th>
                 </tr>
                </thead>
                <tbody id="tblContentCondominos">
                </tbody>
            </table>
        
    </div>
    <script src="../JS/DataTables-1.12.1/js/dataTables.bulma.js"></script>
     <script type="text/javascript" src="../JS/datatables.min.js"></script>
</asp:Content>
