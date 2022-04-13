using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace oDb
{
    public class UtilidadDB
    {
        DataBaseConnection db = new DataBaseConnection();

        /// <summary>
        /// Se realiza la conexion la base de datos donde se encapsula el error recibido en caso de no
        /// poder conectar con sql se tomara y guardara error.
        /// </summary>
        /// <returns></returns>
        public SqlConnection GetConnection()
        {
            string connectionstring = GetStringConnection();

            try
            {
                return new SqlConnection(connectionstring);
            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {

            }
        }
        /// <summary>
        /// Se arma la cadena de conexion para el ser ejecutado en la conexion de la base de datos
        /// </summary>
        /// <returns></returns>
        public string GetStringConnection()
        {
            string Connection = "";
            string ServerName = db.GetServer();
            string Database = db.GetDB();
            string User = db.getUser();
            string Pass = db.getPass();
            Connection = string.Format("Data source={0};Initial Catalog={1};User Id={2};Password={3}", ServerName, Database, User, Pass);
            return Connection;
        }
        /// <summary>
        /// Generic method to retrieve data from the database to make a select using a stored procedure.
        /// </summary>
        /// <param name="cmd"></param>
        /// <returns></returns>
        public DataTable Read(string cmd)
        {
            DataTable dt = new DataTable();
            SqlConnection cn = GetConnection();
            SqlDataAdapter da = new SqlDataAdapter(cmd, cn);
            dt.Clear();
            try
            {
                cn.Open();
                da.SelectCommand.Connection = cn;
                da.Fill(dt);
            }
            catch
            {
                try
                {
                    da = new SqlDataAdapter(("SET DATEFORMAT DMY; EXEC" + cmd), cn);
                    da.SelectCommand.Connection = cn;
                    da.Fill(dt);
                }
                catch (Exception ex)
                {
                    SaveError("INSETAR_ERROR", ex.Message, "GetStringConnection");
                    throw new Exception(ex.Message);
                }

            }
            finally
            {
                cn.Close();
            }
            return dt;
        }
        public DataTable Read(string Procedure, params object[] Params)
        {
            SqlConnection cn = GetConnection();
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter();
            SqlCommand cmd = new SqlCommand();
            da.Dispose();
            dt.Clear();
            cmd.CommandText = Procedure;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandTimeout = 0;
            cn.Open();
            cmd.Connection = cn;
            da.SelectCommand = cmd;
            SqlCommandBuilder.DeriveParameters(cmd);
            try
            {
                if (Params != null)
                {
                    for (int i = 0; i < Params.Length; i++)
                    {
                        cmd.Parameters[i].Value = Params[i - 1];
                    }
                }
                da.Fill(dt);
            }
            catch (Exception ex)
            {
                SaveError("INSERT_ERROR", ex.Message, "Read with Params");
                throw new Exception(ex.Message);
            }
            return dt;
        }
        /// <summary>
        /// Method that allows save the register if anything happens
        /// </summary>
        /// <param name="Procedure"></param>
        /// <param name="Params"></param>
        public void SaveError(string Procedure, params object[] Params)
        {

            SqlConnection cn = GetConnection();
            SqlCommand cmd = new SqlCommand();
            SqlTransaction tr = null;
            //int r = 0;

            try
            {
                cmd.CommandText = Procedure;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandTimeout = 0;
                cn.Open();
                tr = cn.BeginTransaction();
                cmd.Connection = cn;
                cmd.Transaction = tr;
                SqlCommandBuilder.DeriveParameters(cmd);
                if (Params != null)
                {
                    for (int i = 0; i <= Params.Length; i++)
                    {
                        cmd.Parameters[i].Value = Params[i - 1];

                    }
                    cmd.ExecuteNonQuery();
                }
                tr.Commit();
                cmd = null;
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);

            }
            finally
            {
                cn.Close();
            }
        }
        public DataTable Leer(string Procedure, params object[] Params)
        {
            SqlConnection cn = GetConnection();
            DataTable dt = new DataTable();
            SqlCommand cmd = new SqlCommand();
            SqlDataAdapter da = new SqlDataAdapter();
            da.Dispose();
            dt.Clear();
            cmd.CommandText = Procedure;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandTimeout = 30000;
            cn.Open();
            cmd.Connection = cn;
            da.SelectCommand = cmd;
            SqlCommandBuilder.DeriveParameters(cmd);
            try
            {
                if (Params != null)
                {
                    for (int i = 0; i <= Params.Length; i++)
                    {
                        cmd.Parameters[i].Value = Params[i - 1];
                    }
                }
                da.Fill(dt);
            }
            catch (Exception ex)
            {
                SaveError("INSETAR_ERROR", "Leer", ex.Message);
                throw new Exception(ex.Message);

            }
            finally
            {
                cn.Close();
            }
            return dt;
        }
        /// <summary>
        /// Generic method to get the login for and let the user sign in
        /// </summary>
        /// <param name="Procedure"></param>
        /// <param name="Params"></param>
        /// <returns></returns>
        public DataTable LeerLogin(string Procedure, params object[] Params)
        {
            SqlConnection cn = GetConnection();
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter();
            SqlCommand cmd = new SqlCommand();
            dt.Clear();
            cmd.CommandText = Procedure;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandTimeout = 0;
            cn.Open();
            cmd.Connection = cn;
            da.SelectCommand = cmd;
            SqlCommandBuilder.DeriveParameters(cmd);
            try
            {
                if (Params != null)
                {
                    for (int i = 0; i <= Params.Length; i++)
                    {
                        cmd.Parameters[i].Value = Params[i - 1];
                    }
                }
                da.Fill(dt);
            }
            catch (Exception ex)
            {
                SaveError("INSERT_ERROR", ex.Message, "LeerLogin");
                throw new Exception(ex.Message);
            }
            finally
            {
                cn.Close();

            }
            return dt;
        }
        /// <summary>
        /// A generic method to save any register passing the stored procedure and the params to get inserted
        /// </summary>
        /// <param name="Procedure"></param>
        /// <param name="Params"></param>
        /// <returns></returns>
        public int Save(string Procedure, params object[] Params)
        {
            SqlConnection cn = GetConnection();
            SqlCommand cmd = new SqlCommand();
            SqlTransaction tr = null;

            try
            {
                cmd.CommandText = Procedure;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandTimeout = 0;
                cn.Open();
                tr = cn.BeginTransaction();
                cmd.Connection = cn;
                cmd.Transaction = tr;
                SqlCommandBuilder.DeriveParameters(cmd);
                if (Params != null)
                {
                    for (int i = 0; i <= Params.Length; i++)
                    {
                        cmd.Parameters[i].Value = Params[i - 1];
                    }
                }
                cmd.ExecuteNonQuery();
                tr.Commit();
                cmd = null;
                return 1;
            }
            catch (Exception ex)
            {
                SaveError("INSERT_ERROR", "Guardar", ex.Message);
                tr.Rollback();
                return 0;

            }
            finally
            {
                cn.Close();
            }
        }
        /// <summary>
        /// Method that increases the day of the debt for the residence in the database.
        /// </summary>
        /// <param name="Procedure"></param>
        /// <returns></returns>
        public int SaveDay(string Procedure)
        {
            SqlConnection cn = GetConnection();
            SqlCommand cmd = new SqlCommand();
            SqlTransaction tr = null;
            try
            {
                cmd.CommandText = Procedure;
                cmd.CommandType = CommandType.StoredProcedure;
                cn.Open();
                tr = cn.BeginTransaction();
                cmd.Connection = cn;
                cmd.Transaction = tr;
                SqlCommandBuilder.DeriveParameters(cmd);
                cmd.ExecuteNonQuery();

                tr.Commit();
                cmd = null;
                return 1;

            }
            catch (Exception ex)
            {
                SaveError("Insert_Error", ex.Message, "Guardardia");
                tr.Rollback();
                return 0;
            }
            finally
            {
                cn.Close();
            }
        }
        /// <summary>
        /// Generic Method for delete an element in the Database using an stored procedure
        /// </summary>
        /// <param name="Procedure"></param>
        /// <param name="Params"></param>
        /// <returns></returns>
        public bool Delete(string Procedure, params object[] Params)
        {
            SqlConnection cn = GetConnection();
            SqlCommand cmd = new SqlCommand();
            SqlTransaction tr = null;
            try
            {
                cmd.CommandText = Procedure;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandTimeout = 0;
                cn.Open();
                tr = cn.BeginTransaction();
                cmd.Connection = cn;
                cmd.Transaction = tr;
                SqlCommandBuilder.DeriveParameters(cmd);
                if (Params != null)
                {
                    for (int i = 0; i <= Params.Length; i++)
                    {
                        cmd.Parameters[i].Value = Params[i - 1];
                    }
                }
                cmd.ExecuteNonQuery();
                tr.Commit();
                cmd = null;
                return true;
            }
            catch (Exception ex)
            {
                SaveError("Insert_Error", ex.Message, "Eliminar");
                tr.Rollback();
                return false;
            }
            finally
            {
                cn.Close();
            }
        }
    }
}
