using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using Entity;
using System.Data;

namespace BLL
{
    public class TipoGastoBLL
    {
        TipoGastoDAL otg = new TipoGastoDAL();
        public DataTable Listar()
        {

            return otg.Listar();
        }
        public Tipo_GastoEntity Obtener(int Id_TipoGasto)
        {

            return otg.Obtener(Id_TipoGasto);
        }
        public int Nuevo(Tipo_GastoEntity Tipo_GastoEntity)
        {

            return otg.Nuevo(Tipo_GastoEntity);
        }
        public int Editar(Tipo_GastoEntity Tipo_GastoEntity)
        {

            return otg.Editar(Tipo_GastoEntity);
        }
        public bool Eliminar(int Id_TipoGasto)
        {

            return otg.Eliminar(Id_TipoGasto);
        }
    }
}
