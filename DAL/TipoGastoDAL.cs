using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using Entity;
using oDb;

namespace DAL
{
    public class TipoGastoDAL
    {
        UtilidadDB utilidad = new UtilidadDB();
        public DataTable Listar()
        {
            var DT = new DataTable();
            try
            {
                DT = utilidad.Leer("OBTENER_TIPO_GASTO_CAJA_CHICA", 0);
            }
            catch (Exception ex)
            {
                throw new System.ArgumentException(ex.Message);
            }
            return DT;
        }
        public Tipo_GastoEntity Obtener(int Id_gasto)
        {
            var oTipoGastoEntity = new Tipo_GastoEntity();
            var DT = utilidad.Read("OBTENER_TIPO_GASTO_CAJA_CHICA", Id_gasto);
            if (DT.Rows.Count > 0)
            {
                oTipoGastoEntity.Id = (int)DT.Rows[0]["ID_GASTO_CAJA_CHICA"];
                oTipoGastoEntity.Nombre_Gasto = (string)DT.Rows[0]["NOMBRE_GASTO_CAJACHICA"];
            }
            return oTipoGastoEntity;
        }
        public int Nuevo(Tipo_GastoEntity tipo_GastoEntity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("INSERTAR_TIPOGASTO", tipo_GastoEntity.Nombre_Gasto);
            }
            catch
            {
                exito = 0;
            }
            return exito;
        }
        public int Editar(Tipo_GastoEntity tipogastoentity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("ACTUALIZAR_TIPOGASTO", tipogastoentity.Id, tipogastoentity.Nombre_Gasto);
            }
            catch
            {
                exito = 0;
            }
            return exito;
        }
        public bool Eliminar(int Id_tipogasto)
        {
            bool exito = false;
            try
            {
                exito = utilidad.Delete("ELIMINAR_TIPOGASTO", Id_tipogasto);
            }
            catch
            {
                exito = false;
            }
            return exito;
        }
    }
}
