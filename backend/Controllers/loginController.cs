using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BLL;
using BOL;
using System.Web.Cors;
using System.Web.Http.Cors;

namespace mvcrest.Controllers
{
   [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class loginController : ApiController
    {
        // GET: api/login
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/login/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/login
        public User POST([FromBody]User u)
        {
            User user = AccountManager.validate(u.UserName, u.Password);
            return user;
        }

        // PUT: api/login/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/login/5
        public void Delete(int id)
        {
        }
    }
}
