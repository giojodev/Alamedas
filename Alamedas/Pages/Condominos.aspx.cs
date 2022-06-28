using BLL;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Alamedas.Pages
{
    public partial class Condominos : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static string GetCondominos()
        {
            CondominoBLL condominoBLL = new CondominoBLL();
            string result = "";
            try
            {
                DataTable dt = new DataTable();
                DataSet ds = new DataSet();
                dt = condominoBLL.GetResidents();
                if (dt.Rows.Count > 0)
                {
                    result = JsonConvert.SerializeObject(dt);
                }
            }
            catch(WebException ex)
            {
                return ex.Message;
            }
            return result;
        }
    }
}