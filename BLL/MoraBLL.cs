using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using Entity;
using System.Data;

namespace BLL
{
    public class MoraBLL
    {
        MoraDAL oMora = new MoraDAL();
        public DataTable Listar()
        {
            return oMora.Listar();
        }
        public DataTable ObtenerMora(int Mora)
        {
            return oMora.ObtenerMora(Mora);
        }
        public MoraEntity Obtener(int Mora)
        {

            return oMora.Obtener(Mora);
        }
        public MoraEntity ObtenerG(int Mora)
        {

            return oMora.ObtenerG(Mora);
        }
        public int Nuevo(MoraEntity moraEntity)
        {
            return oMora.Nuevp(moraEntity);
        }
        public int Grabar(MoraEntity mora)
        {
            return oMora.Grabar(mora);
        }
        public int Editar(MoraEntity moraEntity)
        {
            return oMora.Editar(moraEntity);
        }
        public int ActualizarDia()
        {

            return oMora.ActualizarDia();
        }
        public bool Eliminar(int IdMora)
        {

            return oMora.Eliminar(IdMora);
        }
        public int Mora_Mensual(int mora)
        {


            return oMora.MoraMensual(mora);
        }
        public int MoraAdelantada(int casa, string concepto, int mes, int anio)
        {
            return oMora.MoraAdelantada(casa, concepto, mes, anio);
        }
    }
}
