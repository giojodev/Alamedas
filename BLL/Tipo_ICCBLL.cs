using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using DAL;
using Entity;

namespace BLL
{
    public class Tipo_ICCBLL
    {
        Ingresos_CajaChicaDAL otipo = new Ingresos_CajaChicaDAL();
        public DataTable Listar()
        {
            return otipo.Listar();
        }
        public Ingreso_Caja_ChicaEntity Obtener(int id)
        {
            return otipo.Obtener(id);
        }
    }
}
