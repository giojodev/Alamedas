using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using Entity;
using oDb;

namespace DAL
{
    public class Tipo_IngresoDAL
    {
        UtilidadDB utilidad = new UtilidadDB();
        public DataTable Listar()
        {
            var DT = new DataTable();
            try
            {
                DT = utilidad.Read("OBTENER_TINGRESO", 0);
            }
            catch (Exception ex)
            {
                throw new System.ArgumentException(ex.Message);
            }
            return DT;
        }
        public Tipo_IngresoEntity Obtener(int Id_TipoIngreso)
        {
            var oTipoIngresoEntity = new Tipo_IngresoEntity();
            var DT = utilidad.Read("OBTENER_TINGRESO", Id_TipoIngreso);
            if (DT.Rows.Count > 0)
            {
                oTipoIngresoEntity.Id = (int)DT.Rows[0]["Id"];
                oTipoIngresoEntity.Nombre_Ingreso = DT.Rows[0]["Nombre_Ingreso"].ToString();
            }
            return oTipoIngresoEntity;
        }
        public int Nuevo(Tipo_IngresoEntity tipo_IngresoEntity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("INSERTAR_TIPOINGRESO", tipo_IngresoEntity.Nombre_Ingreso);
            }
            catch
            {
                //throw new System.ArgumentException(ex.Message);
                exito = 0;
            }
            return exito;
        }
        public int Editar(Tipo_IngresoEntity tipo_IngresoEntity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("ACTUALIZAR_TIPOINGRESO", tipo_IngresoEntity.Id, tipo_IngresoEntity.Nombre_Ingreso);
            }
            catch
            {
                //throw new System.ArgumentException(ex.Message);
                exito = 0;
            }
            return exito;
        }
        public bool Eliminar(int idtipoingreso)
        {
            bool Exito = false;
            try
            {
                Exito = utilidad.Delete("ELIMINAR_TIPOINGRESO", idtipoingreso);
            }
            catch
            {
                //throw new System.ArgumentException(ex.Message);
                Exito = false;
            }
            return Exito;
        }
    }
}
