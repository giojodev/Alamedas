using Entity;
using oDb;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace DAL
{
    public class CondominoDAL
    {
        UtilidadDB utilidad = new UtilidadDB();
        public DataTable List()
        {

            var DT = new DataTable();
            try
            {
                DT = utilidad.Read("OBTENER_CONDOMINO", 0);
            }
            catch (Exception ex)
            {
                utilidad.SaveError("INSERT_ERROR", ex.Message, "Listar Condomino");
                throw new System.ArgumentException(ex.Message);
            }
            return DT;
        }
        public CondominoEntity Obtain(int id_Condomino)
        {
            var oCondomino = new CondominoEntity();
            var DT = utilidad.Read("OBTENER_CONDOMINO", id_Condomino);
            if (DT.Rows.Count > 0)
            {
                oCondomino.Id_condomino = (int)DT.Rows[0]["ID_CONDOMINO"];
                oCondomino.Nombre_Completo = (string)DT.Rows[0]["NOMBRE_COMPLETO"];
                oCondomino.Nombre_Inquilino = (string)DT.Rows[0]["NOMBRE_INQUILINO"];
                oCondomino.Correo = (string)DT.Rows[0]["CORREO"];
                oCondomino.Telefono = (string)DT.Rows[0]["TELEFONO"];
            }
            return oCondomino;
        }
        public int Obtener_CONDOMINO_MORA(int id_MORA)
        {
            int casa = 0;
            var oCondomino = new CondominoEntity();
            var DT = utilidad.Leer("OBTENER_CONDOMINO_MORA", id_MORA);
            if (DT.Rows.Count > 0)
            {
                casa = (int)DT.Rows[0]["CONDOMINO"];
            }
            return casa;
        }
        public int Nuevo(CondominoEntity condominoEntity)
        {
            int Exito = 0;
            try
            {
                Exito = utilidad.Save("INSERTAR_CONDOMINO", condominoEntity.Id_condomino, condominoEntity.Nombre_Completo, condominoEntity.Correo, condominoEntity.Telefono);
            }
            catch (Exception ex)
            {
                Exito = 0;
                utilidad.SaveError("INSERT ERROR", ex.Message, "Nuevo Condomino");
            }
            return Exito;
        }
        public int Editar(CondominoEntity condominoEntity)
        {
            int Exito = 0;
            try
            {
                Exito = utilidad.Save("ACTUALIZAR_CONDOMINO", condominoEntity.Id_condomino, condominoEntity.Nombre_Completo, condominoEntity.Nombre_Inquilino);
            }
            catch (Exception ex)
            {
                Exito = 0;
                utilidad.SaveError("INSERT ERROR", ex.Message, "Editar Condomino");
            }
            return Exito;
        }
        public bool Eliminar(int Id_Condomino)
        {
            bool Exito = false;
            try
            {
                Exito = utilidad.Delete("ELIMINAR_CONDOMINO", Id_Condomino);
            }
            catch (Exception ex)
            {
                Exito = false;
                utilidad.SaveError("INSERT ERROR", ex.Message, "Eliminar Condomino");
            }
            return Exito;
        }
    }
}
