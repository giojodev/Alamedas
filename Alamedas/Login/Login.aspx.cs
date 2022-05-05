using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Alamedas.Login
{
    public partial class Login : System.Web.UI.Page
    {
       
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }
        [WebMethod]
        
        [ScriptMethod]
        
        public static int AuthLogin(List<string> auth)
        {

            var json = auth;
           /* dynamic json = JsonConvert.DeserializeObject(au*/
            return 1;
        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            string test = txtUsuario.Value;
            string test2 = txtPassword.Value;
            string tesst = test + " " + test2;
            //Response.Redirect("../Pages/Default.aspx");
        }
    }
}