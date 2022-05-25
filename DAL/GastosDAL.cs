using Entity;
using oDb;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace DAL
{
    public class GastosDAL
    {
        UtilidadDB utilidad = new UtilidadDB();
        public DataTable Listar()
        {
            var DT = new DataTable();
            try
            {
                DT = utilidad.Read("OBTENER_GASTOS", 0);
            }
            catch (Exception ex)
            {
                throw new System.ArgumentException(ex.Message);
            }
            return DT;
        }
        public double GetGastossDashboard()
        {
            double result = 0;
            result = utilidad.LeerResult("SP_GETGASTOSDASHBOARD");
            return result;
        }
        public GastosEntity Obtener(int idGastos)
        {
            var oTipGastosEntity = new GastosEntity();
            var DT = utilidad.Read("OBTENER_GASTOS", idGastos);
            if (DT.Rows.Count > 0)
            {
                oTipGastosEntity.Consecutivo = (int)DT.Rows[0]["CONSECUTIVO"];
                oTipGastosEntity.Tipo_Gasto = (int)DT.Rows[0]["GASTO"];
                oTipGastosEntity.Fech = (DateTime)DT.Rows[0]["FECHA"];
                oTipGastosEntity.Concepto = DT.Rows[0]["CONCEPTO"].ToString();
                oTipGastosEntity.Valor = Convert.ToDouble(DT.Rows[0]["VALOR"]);
                oTipGastosEntity.Mes = (int)DT.Rows[0]["MES"];
                oTipGastosEntity.Anio = (int)DT.Rows[0]["ANIO"];

            }
            return oTipGastosEntity;
        }
        public int Nuevo(GastosEntity oTipGastosEntity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("INSERTAR_GASTOS", oTipGastosEntity.Consecutivo, oTipGastosEntity.Tipo_Gasto, oTipGastosEntity.Fech, oTipGastosEntity.Concepto, oTipGastosEntity.Valor
                                                    , oTipGastosEntity.Mes, oTipGastosEntity.Anio);
            }
            catch
            {
                //throw new System.ArgumentException(ex.Message);
                exito = 0;
            }
            return exito;
        }
        public int Editar(GastosEntity oTipGastosEntity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("ACTUALIZAR_GASTOS", oTipGastosEntity.Consecutivo, oTipGastosEntity.Tipo_Gasto, oTipGastosEntity.Fech, oTipGastosEntity.Concepto, oTipGastosEntity.Valor
                                                    , oTipGastosEntity.Mes, oTipGastosEntity.Anio);
            }
            catch
            {
                //throw new System.ArgumentException(ex.Message);
                exito = 0;
            }
            return exito;
        }
        public int Grabar(GastosEntity oTipGastosEntity)
        {
            SqlConnection cn = utilidad.GetConnection();
            SqlCommand cmd = new SqlCommand();
            SqlTransaction tr = null; ;
            cn.Open();
            tr = cn.BeginTransaction();
            try
            {
                cmd = new SqlCommand("INSERTAR_GASTOS2", cn, tr);
                cmd.CommandType = CommandType.StoredProcedure;

                SqlParameter parameter = new SqlParameter("@Consecutivo", SqlDbType.Int, 6);
                //parameter.Direction = ParameterDirection.InputOutput;
                parameter.Value = oTipGastosEntity.Consecutivo;
                cmd.Parameters.Add(parameter);
                cmd.Parameters.AddWithValue("@Gasto", oTipGastosEntity.Tipo_Gasto);
                cmd.Parameters.AddWithValue("@Fecha", oTipGastosEntity.Fech);
                cmd.Parameters.AddWithValue("@Concepto", oTipGastosEntity.Concepto);
                cmd.Parameters.AddWithValue("@Valor", oTipGastosEntity.Valor);
                cmd.Parameters.AddWithValue("@Mes", oTipGastosEntity.Mes);
                cmd.Parameters.AddWithValue("@Anio", oTipGastosEntity.Anio);
                cmd.ExecuteNonQuery();
                return 1;
            }
            catch
            {
                return 0;
            }
        }
        public bool Eliminar(int idGastos)
        {
            bool Exito = false;
            try
            {
                Exito = utilidad.Delete("ELIMINAR_GASTO", idGastos);
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
