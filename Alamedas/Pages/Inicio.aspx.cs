using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
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
    }
}