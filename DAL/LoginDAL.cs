using System;
using System.Collections.Generic;
using System.Text;
using Entity;
using System.Data;
using oDb;

namespace DAL
{
    public class LoginDAL
    {
        UtilidadDB utlidad = new UtilidadDB();
        LoginEntity loginEntity = new LoginEntity();
        public int ValidarUsuariO(string usuario, string clave)
        {
            var DT = new DataTable();
            try
            {
                DT = utlidad.LeerLogin("Usp_Validarusuario", usuario);
                if (Convert.ToBoolean(DT.Rows[0]["Activo"]))
                {
                    loginEntity.IdUsuario = Convert.ToInt32(DT.Rows[0]["IdUsuario"]);
                    loginEntity.URol = Convert.ToInt32(DT.Rows[0]["IdRol"]);
                    loginEntity.UAdmin = Convert.ToBoolean(DT.Rows[0]["Admin"]);
                    loginEntity.Username = usuario;
                }
                return 1;
            }
            catch (Exception ex)
            {
                throw new System.ArgumentException(ex.Message);
                return 0;
            }
        }
    }
}
