using Entity;
using oDb;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace DAL
{
    public class CajaChicaDAL
    {
        UtilidadDB utilidad = new UtilidadDB();
        public DataTable List()
        {
            var DT = new DataTable();
            try
            {
                DT = utilidad.Read("OBTENER_GASTOS_CAJA_CHICA", 0);
                return DT;
            }
            catch (Exception ex)
            {
                utilidad.SaveError("INSERT_ERROR", ex.Message, "List CajaChica");
                throw new System.ArgumentException(ex.Message);
            }
        }
        public GastoCajaChicaEntity Obtain(int idGastos)
        {
            var oTipoGastosEntity = new GastoCajaChicaEntity();
            var DT = utilidad.Read("OBTENER_GASTOS_CAJA_CHICA", idGastos);
            if (DT.Rows.Count > 0)
            {
                oTipoGastosEntity.Consecutivo = (int)DT.Rows[0]["CONSECUTIVO"];
                oTipoGastosEntity.Tipo_Gasto = (int)DT.Rows[0]["TIPO_GASTO_CCHICA"];
                oTipoGastosEntity.Fecha = (DateTime)DT.Rows[0]["FECHA"];
                oTipoGastosEntity.Concepto = DT.Rows[0]["CONCEPTO"].ToString();
                oTipoGastosEntity.Valor = Convert.ToDouble(DT.Rows[0]["TOTAL"]);
                oTipoGastosEntity.Mes = (int)DT.Rows[0]["MES"];
                oTipoGastosEntity.Anio = (int)DT.Rows[0]["ANIO"];
            }
            return oTipoGastosEntity;
        }
        public int New(GastoCajaChicaEntity oTipoGastosEntity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("INSERTAR_GASTOS", oTipoGastosEntity.Consecutivo, oTipoGastosEntity.Tipo_Gasto, oTipoGastosEntity.Fecha, oTipoGastosEntity.Concepto, oTipoGastosEntity.Valor
                                                    , oTipoGastosEntity.Mes, oTipoGastosEntity.Anio);
            }
            catch (Exception ex)
            {
                utilidad.SaveError("INSER_ERROR", ex.Message, "Guardar Gasto Caja Chica");
                exito = 0;
            }
            return exito;
        }
        public int Editar(GastoCajaChicaEntity oTipGastosEntity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("ACTUALIZAR_GASTOS", oTipGastosEntity.Consecutivo, oTipGastosEntity.Tipo_Gasto, oTipGastosEntity.Fecha, oTipGastosEntity.Concepto, oTipGastosEntity.Valor
                                                    , oTipGastosEntity.Mes, oTipGastosEntity.Anio);
            }
            catch
            {
                //throw new System.ArgumentException(ex.Message);
                exito = 0;
            }
            return exito;
        }
        public DataTable CONSTRUIR_GRID_GASTOS(int consecutivo)
        {
            var dt = new DataTable();
            try
            {
                dt = utilidad.Leer("CONSTRUIRGRID_GCC", consecutivo);

            }
            catch (Exception ex)
            {
                throw new System.Exception(ex.Message);
            }
            return dt;
        }
        public int OBTENER_CONSECUTIVO()
        {
            int cons = 0;
            var DT = utilidad.Leer("OBTENER_CONSECUTIVO_GCC");
            if (DT.Rows.Count > 0)
            {
                cons = Convert.ToInt32(DT.Rows[0]["CONSECUTIVO"]);
            }
            return cons;
        }
        public int Grabar(GastoCajaChicaEntity oTipGastosEntity)
        {
            int Consecutivo = 0;
            SqlConnection cn = utilidad.GetConnection();
            SqlCommand cmd = new SqlCommand();
            SqlTransaction tr = null;
            cn.Open();
            tr = cn.BeginTransaction();
            try
            {
                cmd = new SqlCommand("GRABAR_GASTOS_CAJA_CHICA", cn, tr);
                cmd.CommandType = CommandType.StoredProcedure;

                SqlParameter parameter = new SqlParameter("@ID", SqlDbType.Int, 6);
                //parameter.Direction = ParameterDirection.InputOutput;
                parameter.Value = oTipGastosEntity.Consecutivo;
                cmd.Parameters.Add(parameter);
                cmd.Parameters.AddWithValue("@TIPO_GASTO_CCHICA", oTipGastosEntity.Tipo_Gasto);
                cmd.Parameters.AddWithValue("@FECHA", oTipGastosEntity.Fecha);
                cmd.Parameters.AddWithValue("@CONCEPTO", oTipGastosEntity.Concepto);
                cmd.Parameters.AddWithValue("@TOTAL", oTipGastosEntity.Valor);
                cmd.Parameters.AddWithValue("@MES", oTipGastosEntity.Mes);
                cmd.Parameters.AddWithValue("@ANIO", oTipGastosEntity.Anio);
                cmd.ExecuteNonQuery();

                if (Consecutivo == 0)
                {
                    Consecutivo = Convert.ToInt32(parameter.Value);
                }
                oTipGastosEntity.Consecutivo = Consecutivo;

                foreach (Detalle_Gasto_Caja_ChicaEntity Detalle in oTipGastosEntity.Lineas)
                {
                    cmd = new SqlCommand("GRABAR_DETALLE_GCC", cn, tr);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@CONSECUTIVO", oTipGastosEntity.Consecutivo);
                    cmd.Parameters.AddWithValue("@ID_PROD_GAST", Detalle.ID_GCC);
                    cmd.Parameters.AddWithValue("@CONCEPTO", Detalle.CONCEPTO);
                    cmd.Parameters.AddWithValue("@TOTAL", Detalle.TOTAL);
                    cmd.ExecuteNonQuery();
                }
                tr.Commit();
                return 1;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
                tr.Rollback();
                return 0;
            }
            finally
            {
                cn.Close();
            }
        }
    }
}
