using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BOL;
using BLL;
using System.Web.Cors;
using System.Web.Http.Cors;


namespace mvcrest.Controllers
{
	[EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
	public class JobseekerController : ApiController
    {
        // GET: api/Jobseeker
        public List<Employer> Get()
        {
			return JsManager.getAll();
        }

        // GET: api/Jobseeker/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Jobseeker
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Jobseeker/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Jobseeker/5
        public void Delete(int id)
        {
        }
    }
}
