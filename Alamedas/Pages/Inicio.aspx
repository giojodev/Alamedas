<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage/Site1.Master" AutoEventWireup="true" CodeBehind="Inicio.aspx.cs" Inherits="Alamedas.Pages.Inicio" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
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
</asp:Content>
