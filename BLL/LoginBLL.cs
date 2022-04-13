using System;
using System.Collections.Generic;
using System.Text;
using DAL;

namespace BLL
{
    public class LoginBLL
    {
        LoginDAL loginDAL = new LoginDAL();
        public int Usuario(string usuario, string clave)
        {
            return loginDAL.ValidarUsuariO(usuario, clave);
        }
    }
}
