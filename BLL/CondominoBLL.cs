using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using DAL;
using Entity;

namespace BLL
{
    public class CondominoBLL
    {
        CondominoDAL condomino = new CondominoDAL();
        public DataTable List()
        {

            return condomino.List();
        }
        public CondominoEntity Obtener(int Id_Condomino)
        {
            return condomino.Obtain(Id_Condomino);
        }
        public int Guardar(CondominoEntity condominoEntity)
        {
            if (condominoEntity.Id_condomino <= 0)
            {
                return condomino.Nuevo(condominoEntity);
            }
            else
            {
                return condomino.Editar(condominoEntity);
            }
        }
        public CondominoEntity Obtener_CONDOMINO_MORA(int idMora)
        {
            int casa = condomino.Obtener_CONDOMINO_MORA(idMora);
            return condomino.Obtain(casa);
        }
        public bool Eliminar(int Id_Condomino)
        {
            return condomino.Eliminar(Id_Condomino);
        }
    }
}
