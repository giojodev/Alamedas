using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services;
namespace Alamedas.Services
{
    public class WSLogin
    {
        [WebMethod]
        [HttpPost]
        public static int AuthLogin (string auth)
        {
            dynamic json = JsonConvert.DeserializeObject(auth);
            return 1;
        }
    }
}