using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services;
using System.Web.Script.Services;

namespace Alamedas.Services
{
    /// <summary>
    /// Summary description for WSLogin1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [ScriptService]
    public class WSLogin1 : System.Web.Services.WebService
    {

        [WebMethod]
        [ScriptMethod]
        //[HttpPost]
        public int AuthLogin(string auth)
        {
            dynamic json = JsonConvert.DeserializeObject(auth);
            return 1;
        }
        [WebMethod]
        //[HttpPost]
        public string nombre(string auth)
        {
            return auth;
        }
    }
}
