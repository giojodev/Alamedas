using Entity;
using oDb;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace DAL
{
    public class DetalleIngresoDAL
    {
        UtilidadDB utilidad = new UtilidadDB();
        public DataTable Listar()
        {
            var DT = new DataTable();
            try
            {
                DT = utilidad.Read("OBTENER_DETALLEINGRESO", 0);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return DT;
        }
        public DataTable ObtenerDetalle(int Consecutivo)
        {
            var DT = new DataTable();
            try
            {
                DT = utilidad.Read("OBTENER_DETALLEINGRESO", Consecutivo);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return DT;
        }

        public DetalleIngresoEntity Obtener(int Consecutivo)
        {
            var oDetalleIngresos = new DetalleIngresoEntity();
            var DT = new DataTable();
            DT = utilidad.Read("OBTENER_DETALLEINGRESO", Consecutivo);
            if (DT.Rows.Count > 0)
            {
                oDetalleIngresos.Consecutivo2 = (int)DT.Rows[0]["CONSECUTIVO"];
                oDetalleIngresos.Mora = (string)DT.Rows[0]["ID_MORA"];
                oDetalleIngresos.Concepto2 = DT.Rows[0]["CONCEPTO"].ToString();
                oDetalleIngresos.Anio2 = (string)DT.Rows[0]["ANIO"];
                oDetalleIngresos.Mes2 = (string)DT.Rows[0]["MES"];
                oDetalleIngresos.Dias_Vencido = (int)DT.Rows[0]["DIAS_VENCIDO"];
                oDetalleIngresos.Valor2 = (double)DT.Rows[0]["VALOR"];
            }
            return oDetalleIngresos;
        }
    }
}
