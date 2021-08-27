using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BOL;
using DAL;

namespace BLL
{
	public class JsManager
	{
		public static List<Employer> getAll()
		{
			List<Employer> employers = new List<Employer>();
			return employers = DBManagerDisConnected.getAll();
		}
	}
}
