using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using DAL;
using Entity;

namespace BLL
{
    public class TipoIngresoBLL
    {
        Tipo_IngresoDAL oti = new Tipo_IngresoDAL();
        public DataTable Listar()
        {

            return oti.Listar();
        }
        public Tipo_IngresoEntity Obtener(int Id_TipoIngreso)
        {

            return oti.Obtener(Id_TipoIngreso);
        }
        public int Nuevo(Tipo_IngresoEntity tipo_IngresoEntity)
        {

            return oti.Nuevo(tipo_IngresoEntity);
        }
        public int Editar(Tipo_IngresoEntity tipo_IngresoEntity)
        {

            return oti.Editar(tipo_IngresoEntity);
        }
        public bool Eliminar(int idtipoingreso)
        {

            return oti.Eliminar(idtipoingreso);
        }
    }
}
