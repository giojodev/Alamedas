using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using Entity;
using oDb;

namespace DAL
{
    public class Tipo_IngresoCajaChicaDAl
    {
        UtilidadDB utilidad = new UtilidadDB();
        public DataTable Listar()
        {
            var DT = new DataTable();
            try
            {
                DT = utilidad.Read("OBTENER_TIPO_INGRESOS_CAJA_CHICA", 0);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return DT;
        }
        public Tipo_Ingreso_Caja_ChicaEntity OPbtener(int id)
        {
            var otipoICC = new Tipo_Ingreso_Caja_ChicaEntity();
            var DT = utilidad.Read("OBTENER_TIPO_INGRESOS_CAJA_CHICA", id);
            if (DT.Rows.Count > 0)
            {
                otipoICC.ID_INGRESOA_CAJA_CHICA = (int)DT.Rows[0]["ID_INGRESOA_CAJA_CHICA"];
                otipoICC.NOMBRE_INGRESO_CAJA_CHICA = Convert.ToString(DT.Rows[0]["NOMBRE_INGRESO_CAJA_CHICA"]);
            }

            return otipoICC;
        }
    }
}
