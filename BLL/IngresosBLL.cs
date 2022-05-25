using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using DAL;
using Entity;

namespace BLL
{
    public class IngresosBLL
    {
        IngresosDAL oingresos = new IngresosDAL();
        public DataTable Listar()
        {

            return oingresos.Listar();
        }
        public DataTable ConstruirGrid(int condomino)
        {
            return oingresos.ConstruirGrid(condomino);
        }
        public IngresosEntity Obtener(int Consecutivo)
        {

            return oingresos.Obtener(Consecutivo);
        }
        public int Nuevo(IngresosEntity ingresosEntity)
        {

            return oingresos.Nuevo(ingresosEntity);
        }
        public int Editar(IngresosEntity ingresosEntity)
        {

            return oingresos.Editar(ingresosEntity);
        }
        public bool Eliminar(int Consecutivo)
        {

            return oingresos.Eliminar(Consecutivo);
        }

        public int Grabar(IngresosEntity ingresosEntity)
        {
            return oingresos.Grabar(ingresosEntity);
        }
        public double GetIngresosDashboard()
        {
            return oingresos.GetIngresosDashboard();
        }
    }
}
