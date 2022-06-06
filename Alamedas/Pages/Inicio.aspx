<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage/Site1.Master" AutoEventWireup="true" CodeBehind="Inicio.aspx.cs" Inherits="Alamedas.Pages.Inicio" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../JS/login.js"></script>
    <script src="../JS/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs5/jq-3.6.0/dt-1.12.1/af-2.4.0/b-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.3/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.6/sb-1.3.3/sp-2.0.1/sl-1.4.0/sr-1.1.1/datatables.min.css"/>
 
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs5/jq-3.6.0/dt-1.12.1/af-2.4.0/b-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.3/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.6/sb-1.3.3/sp-2.0.1/sl-1.4.0/sr-1.1.1/datatables.min.js"></script>

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
        
            <table id="tablaTopMora" class="display">
                <thead>
                  <tr>
                     <th>Column 1</th>
                     <th>Column 2</th>
                 </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Row 1 Data 1</td>
                        <td>Row 1 Data 2</td>
                    </tr>
                    <tr>
                        <td>Row 2 Data 1</td>
                        <td>Row 2 Data 2</td>
                    </tr>
                </tbody>
            </table>
        
    </div>
</asp:Content>
