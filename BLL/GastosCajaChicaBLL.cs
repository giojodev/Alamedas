using System;
using System.Collections.Generic;
using System.Data;
using DAL;
using Entity;
using System.Text;

namespace BLL
{
    public class GastosCajaChicaBLL
    {
        CajaChicaDAL gastosCajaChicaDAL = new CajaChicaDAL();

        public DataTable Listar()
        {
            return gastosCajaChicaDAL.List();
        }
        public GastoCajaChicaEntity Obtener(int idGastos)
        {

            return gastosCajaChicaDAL.Obtain(idGastos);
        }
        public int Nuevo(GastoCajaChicaEntity oTipGastosEntity)
        {
            return gastosCajaChicaDAL.New(oTipGastosEntity);
        }
        public int Grabar(GastoCajaChicaEntity oTipGastosEntity)
        {
            return gastosCajaChicaDAL.Grabar(oTipGastosEntity);
        }
        public DataTable CONSTRUIR_GRID_GASTOS(int consecutivo)
        {
            return gastosCajaChicaDAL.CONSTRUIR_GRID_GASTOS(consecutivo);
        }
        public int OBTENER_CONSECUTIVO()
        {
            return gastosCajaChicaDAL.OBTENER_CONSECUTIVO();
        }
    }
}
