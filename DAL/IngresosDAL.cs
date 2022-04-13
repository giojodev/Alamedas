using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using Entity;
using oDb;

namespace DAL
{
    public class IngresosDAL
    {
        UtilidadDB utilidad = new UtilidadDB();
        public DataTable Listar()
        {
            var DT = new DataTable();
            try
            {
                DT = utilidad.Read("OBTENER_INGRESOS", 0);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return DT;
        }
        public DataTable ConstruirGrid(int Id_condomino)
        {
            var dt = new DataTable();
            try
            {
                dt = utilidad.Read("CONSTRUIR_GRID", Id_condomino);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return dt;
        }
        public IngresosEntity Obtener(int Consecutivo)
        {
            var oIngresos = new IngresosEntity();
            var DT = new DataTable();
            DT = utilidad.Leer("OBTENER_INGRESOS", Consecutivo);
            if (DT.Rows.Count > 0)
            {
                oIngresos.Consecutivo = (int)DT.Rows[0]["CONSECUTIVO"];
                oIngresos.Concepto = DT.Rows[0]["CONCEPTO"].ToString();
                oIngresos.Anio = (int)DT.Rows[0]["ANIO"];
                oIngresos.Fecha = (DateTime)DT.Rows[0]["FECHA"];
                oIngresos.Mes = (int)DT.Rows[0]["MES"];
                oIngresos.Tipo_Ingreso = (int)DT.Rows[0]["INGRESO"];
                oIngresos.Total = (double)DT.Rows[0]["TOTAL"];
            }
            return oIngresos;
        }
        public int Nuevo(IngresosEntity ingresosEntity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("INSERTAR_INGRESOS", ingresosEntity.Consecutivo, ingresosEntity.Tipo_Ingreso, ingresosEntity.Fecha, ingresosEntity.Concepto, ingresosEntity.Total, ingresosEntity.Mes, ingresosEntity.Anio);
            }
            catch
            {
                exito = 0;
            }
            return exito;
        }
        public int Editar(IngresosEntity ingresosEntity)
        {
            int exito = 0;
            try
            {
                exito = utilidad.Save("ACTUALIZAR_INGRESOS", ingresosEntity.Consecutivo, ingresosEntity.Tipo_Ingreso, ingresosEntity.Fecha, ingresosEntity.Concepto, ingresosEntity.Total, ingresosEntity.Mes, ingresosEntity.Anio);
            }
            catch
            {
                exito = 0;
            }
            return exito;
        }
        public bool Eliminar(int Consecutivo)
        {
            bool exito = false;
            try
            {
                exito = utilidad.Delete("ELIMINAR_INGRESO", Consecutivo);
            }
            catch
            {
                exito = false;
            }
            return exito;
        }

        public int Grabar(IngresosEntity ingresosEntity)
        {
            SqlConnection cn = utilidad.GetConnection();
            SqlCommand cmd = new SqlCommand();
            SqlTransaction tr = null;
            int Consecutivo = 0;
            cn.Open();
            tr = cn.BeginTransaction();
            try
            {
                cmd = new SqlCommand("INSERTAR_INGRESOS", cn, tr);
                cmd.CommandType = CommandType.StoredProcedure;

                SqlParameter parameter = new SqlParameter("@CONSECUTIVO", SqlDbType.Int, 6);
                parameter.Direction = ParameterDirection.InputOutput;
                parameter.Value = ingresosEntity.Consecutivo;
                cmd.Parameters.Add(parameter);
                cmd.Parameters.AddWithValue("@Usuario", 1);
                cmd.Parameters.AddWithValue("@NOMBRE_INQUILINO", ingresosEntity.Nombre_Inquilino);
                cmd.Parameters.AddWithValue("@TIPO_INGRESO", ingresosEntity.Tipo_Ingreso);
                cmd.Parameters.AddWithValue("@FECHA", ingresosEntity.Fecha);
                cmd.Parameters.AddWithValue("@CONCEPTO", ingresosEntity.Concepto);
                cmd.Parameters.AddWithValue("@TOTAL", ingresosEntity.Total);
                cmd.Parameters.AddWithValue("@MES", ingresosEntity.Mes);
                cmd.Parameters.AddWithValue("@ANIO", ingresosEntity.Anio);
                cmd.ExecuteNonQuery();

                if (Consecutivo == 0)
                {
                    Consecutivo = Convert.ToInt32(parameter.Value);
                }
                ingresosEntity.Consecutivo = Consecutivo;

                foreach (DetalleIngresoEntity Detalle in ingresosEntity.Lineas)
                {
                    cmd = new SqlCommand("GRABAR_DETALLEINGRESO", cn, tr);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@CONSECUTIVO", ingresosEntity.Consecutivo);
                    cmd.Parameters.AddWithValue("@MORA", Detalle.Mora);
                    cmd.Parameters.AddWithValue("@CONCEPTO", Detalle.Concepto2);
                    cmd.Parameters.AddWithValue("@MES", Detalle.Mes2);
                    cmd.Parameters.AddWithValue("@DIAS_VENCIDO", Detalle.Dias_Vencido);
                    cmd.Parameters.AddWithValue("@ANIO", Detalle.Anio2);
                    cmd.Parameters.AddWithValue("@VALOR", Detalle.Valor2);
                    cmd.ExecuteNonQuery();
                }
                tr.Commit();
                return 1;
            }
            catch (Exception ex)
            {
                throw new System.Exception(ex.Message);
                tr.Rollback();
                return -1;
            }
            finally
            {
                cn.Close();
            }
        }
    }
}
