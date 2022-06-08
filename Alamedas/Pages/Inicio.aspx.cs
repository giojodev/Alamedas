using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using BLL;
using Newtonsoft.Json;


namespace Alamedas.Pages
{
    public partial class Inicio : System.Web.UI.Page
    {
        MoraBLL moraBll = new MoraBLL();
        IngresosBLL ingresosBll = new IngresosBLL();
        GastosBLL gastosBLL = new GastosBLL();

        protected void Page_Load(object sender, EventArgs e)
        {
            CargarInfoDashboard();
        }
        public void CargarInfoDashboard()
        {
            lblMora.Text=Convert.ToString(moraBll.GetMoraDashboard());
            lblIngresos.Text = Convert.ToString(ingresosBll.GetIngresosDashboard());
            lblGastos.Text = Convert.ToString(gastosBLL.GetGastossDashboard());
            
        }
        [WebMethod]
        public static string GetTopMora()
        {
            MoraBLL mora = new MoraBLL();
            String result="";
            try
            {
                
                DataTable dt = new DataTable();
                DataSet ds = new DataSet();
                dt = mora.GetTopMora();
                if (dt.Rows.Count > 0)
                {
                   
                    result = JsonConvert.SerializeObject(dt);
                    //return result;
                }
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            
            return result;
            
        }
        //public string DataSetToJSON(DataTable dt)
        //{
        //    string JSONString = string.Empty;
        //    JSONString = JsonConvert.SerializeObject(dt);
        //    return JSONString;
           
        //}
    }
}