using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BOL
{
   public class Jobseeker:User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string Branch { get; set; }
        public string Gender { get; set; }
        public string KeySkills { get; set; }
        public string Uidtype { get; set; }
        public int UidNumber { get; set; }
        public int PassOutYear { get; set; }
        public int Percentage_Grad { get; set; }
        public int Percentage_10th { get; set; }
        public int Percentage_12th { get; set; }
    }
}
