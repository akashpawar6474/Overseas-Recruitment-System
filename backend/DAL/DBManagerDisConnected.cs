using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BOL;
using System.Data;
using System.Data.SqlClient;

namespace DAL
{
    public class DBManagerDisConnected
    {
		public static string conString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=D:\New folder (4)\New folder (5)\mvcrest\mvcrest\App_Data\mcps.mdf;Integrated Security=True";
		public static List<Employer> getAll()
		{
			List<Employer> employers = new List<Employer>();
			string cmdString = "select * from employer";
			IDbConnection con = new SqlConnection();
			con.ConnectionString = conString;

			IDbCommand cmd = new SqlCommand();
			cmd.Connection = con;
			cmd.CommandText = cmdString;
			SqlDataAdapter da = new SqlDataAdapter(cmd as SqlCommand);
			DataSet ds = new DataSet();
			try
			{
				da.Fill(ds);
				DataTable dt = ds.Tables[0];
				foreach (DataRow datarow in dt.Rows)
				{
					string regName = datarow["registered_name"].ToString();
					string field = datarow["field"].ToString();
					string city = datarow["city"].ToString();
					string state = datarow["state"].ToString();
					string country = datarow["country"].ToString();
					int pinCode = int.Parse(datarow["pinCode"].ToString());
					string description = datarow["description"].ToString();
					string webAddress = datarow["webAddress"].ToString();
					int points = int.Parse(datarow["points"].ToString());
					string placementPortalUrl = datarow["placemetPortalUrl"].ToString();

					Employer emp = new Employer
					{
						regName = regName,
						field = field,
						city = city,
						state = state,
						country=country,
						pinCode=pinCode,
						description=description,
						webAddress=webAddress,
						points=points,
						placementPortalUrl=placementPortalUrl

					};
					employers.Add(emp);
				}
			}
			
			catch (SqlException ex)
			{
				string exmsg = ex.Message;
				throw ex;
			}
			return employers;
		}
	}
}