using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BOL;
using System.Data;
using System.Data.SqlClient;

namespace DAL
{
    public class DBManagerConnected
    {       public static string conString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=D:\New folder (4)\New folder (5)\mvcrest\mvcrest\App_Data\mcps.mdf;Integrated Security=True";
        //get a constring from database
            public static User ValidateUser(string username,string password)
         {
            string cmdString = "select * from Users WHERE username=@username AND password=@password";

            IDbConnection con = new SqlConnection();
            con.ConnectionString = conString;
            User u = null;

            IDbCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = cmdString;
            IDataReader reader = null;
            cmd.Parameters.Add(new SqlParameter("@username", username));
            cmd.Parameters.Add(new SqlParameter("@password", password));

            try
            {
                con.Open();
                reader = cmd.ExecuteReader();
               if(reader.Read())
                {
                    u = new User();
                    u.Id = int.Parse(reader["id"].ToString());
                    u.UserName = reader["username"].ToString();
                    u.Password = reader["password"].ToString();
                    u.Role = reader["role"].ToString();
					u.EmailId = reader["emailId"].ToString();

                }
            }catch(SqlException ex)
            {
                throw ex;
            }
            finally
            {
                con.Close();
            }
            return u;
        }
    }
}