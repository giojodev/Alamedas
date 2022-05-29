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
        public string GetTopMora()
        {
            String result="";
            try
            {
                
                DataTable dt = new DataTable();
                DataSet ds = new DataSet();
                dt = moraBll.GetTopMora();
                if (dt.Rows.Count > 0)
                {
                    result=DataSetToJSON(dt);
                }
            }
            catch (Exception ex)
            {
                lblGastos.Text = ex.Message;
            }
            return result;
            
        }
        public static string DataSetToJSON(DataTable dt)
        {
            Dictionary<string, object> dict = new Dictionary<string, object>();
            object[] arr = new object[dt.Rows.Count + 1];

            for (int i = 0; i <= dt.Rows.Count - 1; i++)
            {
                arr[i] = dt.Rows[i].ItemArray;
            }

            dict.Add(dt.TableName, arr);

            JavaScriptSerializer json = new JavaScriptSerializer();
            return json.Serialize(dict);
        }
    }
}