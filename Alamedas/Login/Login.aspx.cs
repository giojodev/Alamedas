using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Alamedas.Login
{
    public partial class Login : System.Web.UI.Page
    {
        string pass = WebConfigurationManager.AppSettings["osmany"];
        protected void Page_Load(object sender, EventArgs e)
        {
            lblError.Visible = false;   
            
        }
        
        
        public static int AuthLogin(List<string> auth)
        {

            var json = auth;
           /* dynamic json = JsonConvert.DeserializeObject(au*/
            return 1;
        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            if (ValidarLogin() != 0)
            {
                Response.Redirect("../Pages/Inicio.aspx");
            }
            else
            {
                lblError.Visible = true;
            }
           
        }
        public int ValidarLogin()
        {
            string test = txtUsuario.Value;
            string password = txtPassword.Value;
            if (pass == password)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
    }
}