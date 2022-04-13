using System;
using System.Collections.Generic;
using System.Text;
using Entity;
using System.Data.SqlClient;
using System.Data;
using oDb;

namespace DAL
{
    public class Ingresos_CajaChicaDAL
    {
        UtilidadDB utilidad = new UtilidadDB();
        public DataTable Listar()
        {
            var DT = new DataTable();
            try
            {
                DT = utilidad.Leer("OBTENER_INGRESOS_CAJA_CHICA", 0);

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return DT;
        }
        public Ingreso_Caja_ChicaEntity Obtener(int Id_Ingreso_caja_chica)
        {
            var oIngreso_Gastoentity = new Ingreso_Caja_ChicaEntity();
            var DT = utilidad.Leer("OBTENER_INGRESOS_CAJA_CHICA", Id_Ingreso_caja_chica);
            if (DT.Rows.Count > 0)
            {
                oIngreso_Gastoentity.CONSECUTIVO = (int)DT.Rows[0]["CONSECUTIVO"];
                oIngreso_Gastoentity.TIPO_INGRESOC = (int)DT.Rows[0]["Tipo_IngresoC"];
                oIngreso_Gastoentity.FECHA = Convert.ToDateTime(DT.Rows[0]["FECHA"]);
                oIngreso_Gastoentity.CONCEPTO = Convert.ToString(DT.Rows[0]["CONCEPTO"]);
                oIngreso_Gastoentity.TOTAL = Convert.ToDouble(DT.Rows[0]["TOTAL"]);
                oIngreso_Gastoentity.MES = (int)DT.Rows[0]["MES"];
                oIngreso_Gastoentity.ANIO = (int)DT.Rows[0]["ANIO"];
            }
            return oIngreso_Gastoentity;
        }
        public DataTable CONSTRUIR_GRID_ICC(int Consecutivo)
        {
            var dt = new DataTable();
            try
            {
                dt = utilidad.Leer("CONSTRUIRGRID_ICC", Consecutivo);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return dt;
        }
        public int OBTENER_CONSECUTIVO()
        {
            int CONS = 0;
            var DT = utilidad.Leer("OBTENER_CONSECUTIVO_ICC");
            if (DT.Rows.Count > 0)
            {
                CONS = Convert.ToInt32(DT.Rows[0]["CONSECUTIVO"]);
            }

            return CONS;
        }
        public bool Anulacion_Ingreso(int consecutivo)
        {
            bool anulado = false;
            try
            {
                anulado = utilidad.Delete("ANULAR_INGRESO_CAJA_CHICA", consecutivo);

            }
            catch
            {
                anulado = false;
            }
            return anulado;
        }


        public int Grabar(Ingreso_Caja_ChicaEntity oIngreso_CCEntity)
        {
            SqlConnection cn = utilidad.GetConnection();
            SqlCommand cmd = new SqlCommand();
            SqlTransaction tr = null;
            int consecutivo = 0;
            cn.Open();
            tr = cn.BeginTransaction();
            try
            {
                cmd = new SqlCommand("GRABAR_INGRESOS_CAJA_CHICA", cn, tr);
                cmd.CommandType = CommandType.StoredProcedure;
                SqlParameter paremeter = new SqlParameter("@ID", SqlDbType.Int, 6);
                paremeter.Value = oIngreso_CCEntity.CONSECUTIVO;
                cmd.Parameters.Add(paremeter);
                cmd.Parameters.AddWithValue("@TIPO_INGRESO", oIngreso_CCEntity.TIPO_INGRESOC);
                cmd.Parameters.AddWithValue("@FECHA", oIngreso_CCEntity.FECHA);
                cmd.Parameters.AddWithValue("@CONCEPTO", oIngreso_CCEntity.CONCEPTO);
                cmd.Parameters.AddWithValue("@TOTAL", oIngreso_CCEntity.TOTAL);
                cmd.Parameters.AddWithValue("@MES", oIngreso_CCEntity.MES);
                cmd.Parameters.AddWithValue("@ANIO", oIngreso_CCEntity.ANIO);
                cmd.ExecuteNonQuery();

                if (consecutivo == 0)
                {
                    consecutivo = Convert.ToInt32(paremeter.Value);
                }
                oIngreso_CCEntity.CONSECUTIVO = consecutivo;
                foreach (Detalle_Ingreso_Caja_ChicaEntity detalle in oIngreso_CCEntity.Lineas)
                {
                    cmd = new SqlCommand("GRABAR_DETALLE_ICC", cn, tr);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@CONSECUTIVO", oIngreso_CCEntity.CONSECUTIVO);
                    cmd.Parameters.AddWithValue("@ID_ICC", detalle.ID_PRODGASTO);
                    cmd.Parameters.AddWithValue("@CONCEPTO", detalle.CONCEPTO);
                    cmd.Parameters.AddWithValue("@TOTAL", detalle.TOTAL);
                    cmd.ExecuteNonQuery();
                }
                tr.Commit();
                return 1;


            }
            catch (Exception EX)
            {
                throw new Exception(EX.Message);
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
