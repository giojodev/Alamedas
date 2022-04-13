using System;
using System.Collections.Generic;
using System.Text;

namespace oDb
{
    public class DataBaseConnection
    {
        public string GetDB()
        {
            string DBName = "ALAMEDASBD";
            return DBName;
        }

        public string GetServer()
        {
            string Server = "GOJ-DEV";
            return Server;
        }
        public string getUser()
        {
            string userDB = "adc_osmany";
            return userDB;
        }
        public string getPass()
        {
            string psswd = "123qwe";
            return psswd;
        }

    }
}
