using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using Entity;
using System.Data;

namespace BLL
{
    public class Ingreso_Caja_ChicaBLL
    {
        Ingresos_CajaChicaDAL oingresoscajachicaDAL = new Ingresos_CajaChicaDAL();
        public DataTable Listar()
        {
            return oingresoscajachicaDAL.Listar();
        }
        public Ingreso_Caja_ChicaEntity Obtener(int Id_Ingreso_Caja_chica)
        {
            return oingresoscajachicaDAL.Obtener(Id_Ingreso_Caja_chica);
        }
        public DataTable CONSTRUIR_GRID_ICC(int id)
        {
            return oingresoscajachicaDAL.CONSTRUIR_GRID_ICC(id);
        }
        public int OBTENER_CONSECUTIVO()
        {
            return oingresoscajachicaDAL.OBTENER_CONSECUTIVO();
        }
        public int Grabar(Ingreso_Caja_ChicaEntity ingresosentity)
        {
            return oingresoscajachicaDAL.Grabar(ingresosentity);
        }
        public bool Anular(int ingreso_Caja_ChicaEntity)
        {
            return oingresoscajachicaDAL.Anulacion_Ingreso(ingreso_Caja_ChicaEntity);
        }
    }
}
