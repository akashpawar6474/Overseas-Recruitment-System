using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BOL;
using DAL;

namespace BLL
{
    public class AccountManager
    {
        public static User validate(string username,string password)
        {
            User u = DBManagerConnected.ValidateUser(username, password);

            return u;
        }
    }
}
