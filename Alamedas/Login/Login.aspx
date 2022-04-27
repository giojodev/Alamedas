<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Alamedas.Login.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Alamedas de las Colinas</title>
     <link href="../CSS/stylesheet.css" rel="stylesheet" />
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

</head>
<body>
    <section>
        <h1 style="color:ghostwhite">Alamedas de las Colinas</h1><br />
        <h3 style="color:ghostwhite">Bienvenido</h3><br />
   
        
        <form class="form" id="login" runat="server" >

            <input type="text" class="input" id="txtUsuario" placeholder="Usuario" /><br/><br/>
            <input type="password" class="input" id="txtPassword" placeholder="Password" /><br/><br/>
            <%--<input type="submit" id="btnSubmit" class="btn btn-info" placeholder="Ingresar" value="Ingresar" />--%>
            <asp:Button ID="btnLogin" runat="server"  Text="Ingresar" class="btn btn-info" OnClick="btnLogin_Click"/>
        </form>

    </section>
    <script src="../JS/login.js"></script>
   
</body>
</html>
