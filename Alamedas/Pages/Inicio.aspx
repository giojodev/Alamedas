<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage/Site1.Master" AutoEventWireup="true" CodeBehind="Inicio.aspx.cs" Inherits="Alamedas.Pages.Inicio" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../JS/jquery-3.6.0.min.js"></script>
    <script src="../JS/login.js"></script>
   
  

    <link rel="stylesheet" type="text/css" href="../JS/datatables.min.css"/>
    <%--<link href="../CSS/dataTables.bulma.min.css" rel="stylesheet" />
    <link href="../CSS/bulma.min.css" rel="stylesheet" />--%>
    <%--<link href="../JS/DataTables-1.12.1/css/dataTables.bulma.min.css" rel="stylesheet" />--%>
    <link href="../JS/DataTables-1.12.1/css/dataTables.bulma.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="dashboardfila1">
        <div class="dashboardinfo">
            <h1 class="titulo">Mora acumulada</h1>
            <asp:Label ID="lblMora" class="datoDashboard" runat="server" Text="Test"></asp:Label> 
        </div>
        <div class="dashboardinfo">
            <h2 class="titulo">Ingresos Mes en curso</h2>
            <asp:Label ID="lblIngresos" class="datoDashboard" runat="server" Text="Test"></asp:Label>
        </div>
        <div class="dashboardinfo">
            <h3 class="titulo">Gastos Mes en Curso</h3>
            <asp:Label ID="lblGastos" class="datoDashboard" runat="server" Text="Test"></asp:Label>
        </div>
    </div>
    <div class="espacioTabla" >
        
            <table id="tablaTopMora" class="table is-striped">
                <thead>
                  <tr>
                     <th>CONDOMINO</th>
                     <th>MORA</th>
                     <th>MESES</th>
                 </tr>
                </thead>
                <tbody id="tblContentMora">
                </tbody>
            </table>
        
    </div>
    <script src="../JS/DataTables-1.12.1/js/dataTables.bulma.js"></script>
    <%--<script src="../JS/DataTables-1.12.1/js/dataTables.bulma.min.js"></script>--%>
     <script type="text/javascript" src="../JS/datatables.min.js"></script>
</asp:Content>
