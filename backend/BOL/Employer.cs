using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BOL
{
    public class Employer:User
    {
        public string regName { get; set; }
        public string field { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string country { get; set; }
        public int pinCode { get; set; }
        public string description { get; set; }
        public string webAddress { get; set; }
        public int points { get; set; }
        public string placementPortalUrl { get; set; }
    }
}
