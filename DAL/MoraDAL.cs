using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using Entity;
using oDb;

namespace DAL
{
    public class MoraDAL
    {
        UtilidadDB utilidad = new UtilidadDB();
        public DataTable Listar()
        {
            var DT = new DataTable();
            try
            {
                DT = utilidad.Read("OBTENER_MORA", 0);
            }
            catch (Exception ex)
            {
                throw new System.ArgumentException(ex.Message);
            }
            return DT;
        }
        public DataTable ObtenerMora(int Mora)
        {
            var DT = new DataTable();
            try
            {
                DT = utilidad.Read("OBTENER_MORA", Mora);
            }
            catch (Exception ex)
            {
                throw new System.ArgumentException(ex.Message);
            }
            return DT;
        }
        public MoraEntity Obtener(int Mora)
        {
            var oMora = new MoraEntity();
            var DT = utilidad.Read("OBTENER_MORA", Mora);
            if (DT.Rows.Count > 0)
            {
                oMora.Id_Mora = (string)DT.Rows[0]["ID_MORA"];
                oMora.Fecha = (DateTime)DT.Rows[0]["FECHA"];
                oMora.Condomino = (int)DT.Rows[0]["CONDOMINO"];
                oMora.Concepto = DT.Rows[0]["CONCEPTO"].ToString();
                oMora.Estado = DT.Rows[0]["ESTADO"].ToString();
                oMora.Dias_Vencido = (int)DT.Rows[0]["DIAS_VENCIDO"];
                oMora.Mes = DT.Rows[0]["MES"].ToString();
                oMora.Anio = DT.Rows[0]["ANIO"].ToString();
                oMora.Valor = (double)DT.Rows[0]["VALOR"];
            }
            return oMora;
        }
        public MoraEntity ObtenerG(int Mora)
        {
            var oMora = new MoraEntity();
            var DT = utilidad.Read("OBTENER_MORA2", Mora);
            if (DT.Rows.Count > 0)
            {
                oMora.Id_Mora = DT.Rows[0]["ID_MORA"].ToString();
                oMora.Fecha = (DateTime)DT.Rows[0]["FECHA"];
                oMora.Condomino = (int)DT.Rows[0]["CONDOMINO"];
                oMora.Concepto = DT.Rows[0]["CONCEPTO"].ToString();
                oMora.Estado = DT.Rows[0]["ESTADO"].ToString();
                oMora.Dias_Vencido = (int)DT.Rows[0]["DIAS_VENCIDO"];
                oMora.Mes = DT.Rows[0]["MES"].ToString();
                oMora.Anio = DT.Rows[0]["ANIO"].ToString();
                oMora.Valor = Convert.ToDouble(DT.Rows[0]["VALOR"]);
            }
            return oMora;
        }
        public int Nuevp(MoraEntity moraEntity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("INSERTAR_MORA_MENSUAL", moraEntity.Fecha,
                                    moraEntity.Condomino, moraEntity.Concepto, moraEntity.Valor, moraEntity.Estado,
                                    moraEntity.Dias_Vencido, moraEntity.Mes, moraEntity.Anio);

            }
            catch
            {
                exito = 0;
            }
            return exito;
        }
        public int Grabar(MoraEntity moraEntity)
        {
            SqlConnection cn = utilidad.GetConnection();
            SqlCommand cmd = new SqlCommand();
            SqlTransaction tr = null; ;
            cn.Open();
            tr = cn.BeginTransaction();

            try
            {
                cmd = new SqlCommand("INSERTAR_MORA", cn, tr);
                cmd.CommandType = CommandType.StoredProcedure;

                SqlParameter parameter = new SqlParameter("@ID_MORA", SqlDbType.VarChar, 100);

                parameter.Value = moraEntity.Id_Mora;
                cmd.Parameters.Add(parameter);
                cmd.Parameters.AddWithValue("@condomino", moraEntity.Condomino);
                cmd.Parameters.AddWithValue("@fecha", moraEntity.Fecha);
                cmd.Parameters.AddWithValue("@estado", moraEntity.Estado);
                cmd.Parameters.AddWithValue("@diasv", moraEntity.Dias_Vencido);
                cmd.Parameters.AddWithValue("@Concepto", moraEntity.Concepto);
                cmd.Parameters.AddWithValue("@Valor", moraEntity.Valor);
                cmd.Parameters.AddWithValue("@Mes", moraEntity.Mes);
                cmd.Parameters.AddWithValue("@Anio", moraEntity.Anio);
                cmd.ExecuteNonQuery();
                return 1;
            }
            catch
            {
                return 0;
            }

        }
        public Double GetMoraDashboard()
        {
            double result = 0;
            result = utilidad.LeerResult("SP_GETMORADASHBOARD");
            return result;
        }
        public DataTable GetTopMora()
        {
            
            DataTable dt = new DataTable();
            dt = utilidad.Leer("SP_GETCONDOMINO_MORA_DASHBOARD");
            return dt;
        }
        public int Editar(MoraEntity moraEntity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("ACTUALIZAR_MORA", moraEntity.Id_Mora, moraEntity.Fecha,
                                    moraEntity.Condomino, moraEntity.Concepto, moraEntity.Valor, moraEntity.Estado,
                                    moraEntity.Dias_Vencido, moraEntity.Mes, moraEntity.Anio);

            }
            catch
            {
                exito = 0;
            }
            return exito;
        }
        public int ActualizarDia()
        {
            int exito = 0;
            try
            {
                exito = utilidad.SaveDay("ACTUALIZAR_DIA_MORA");

            }
            catch
            {
                exito = 0;
            }
            return exito;
        }
        public bool Eliminar(int IdMora)
        {
            bool exito = false;
            try
            {
                exito = utilidad.Delete("ELIMINAR_MORA", IdMora);

            }
            catch
            {
                exito = false;
            }
            return exito;
        }

        public int MoraMensual(int mora)
        {
            int casa = 0;
            string concepto = DateTime.Now.ToString("MMMM").ToUpper();
            int mes, anio;
            mes = DateTime.Now.Month;
            anio = DateTime.Now.Year;
            
            DataTable dt = new DataTable();
            try
            {
                dt = utilidad.Leer("CONDOMINO_MORA_MENSUAL");
                foreach (DataRow dr in dt.Rows)
                {
                    casa = Convert.ToInt32(dr["ID_CONDOMINO"]);
                    return  utilidad.Save("MORAMENSUAL", mora, casa, concepto, mes, anio);

                }
            }
            catch (Exception ex)
            {
                throw new System.Exception(ex.Message);
                return 0;
            }

            return 1;

        }
        public int MoraAdelantada(int casa, string concepto, int mes, int anio)
        {
            int mora = 0;

            int m = 0;
            DataTable dt = new DataTable();
            try
            {

                m = utilidad.Save("MORAMENSUAL", mora, casa, concepto, mes, anio);

            }
            catch (Exception ex)
            {
                throw new System.Exception(ex.Message);
                return 0;
            }

            return m;

        }
    }
}
