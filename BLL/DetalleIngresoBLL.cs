using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using System.Data;

namespace BLL
{
    public class DetalleIngresoBLL
    {
        DetalleIngresoDAL detalleIngresoDAL = new DetalleIngresoDAL();
        public DataTable Listar()
        {

            return detalleIngresoDAL.Listar();
        }
        public DataTable ObtenerDetalle(int Consecutivo)
        {
            return detalleIngresoDAL.ObtenerDetalle(Consecutivo);
        }
    }
}
