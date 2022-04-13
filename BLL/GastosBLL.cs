using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using Entity;
using System.Data;

namespace BLL
{
    public class GastosBLL
    {
        GastosDAL gastosDAL = new GastosDAL();
        public DataTable Listar()
        {

            return gastosDAL.Listar();
        }
        public GastosEntity Obtener(int idGastos)
        {
            return gastosDAL.Obtener(idGastos);
        }
        public int Nuevo(GastosEntity oTipGastosEntity)
        {

            return gastosDAL.Nuevo(oTipGastosEntity);
        }
        public int Grabar(GastosEntity oTipGastosEntity)
        {

            return gastosDAL.Grabar(oTipGastosEntity);
        }
        public int Editar(GastosEntity oTipGastosEntity)
        {
            return gastosDAL.Editar(oTipGastosEntity);
        }
        public bool Eliminar(int idGastos)
        {
            return gastosDAL.Eliminar(idGastos);
        }
    }
}
