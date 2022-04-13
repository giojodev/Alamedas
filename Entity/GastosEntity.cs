using System;
using System.Collections.Generic;
using System.Text;

namespace Entity
{
    public class GastosEntity
    {
        public int Consecutivo { get; set; }
        public int Tipo_Gasto { get; set; }
        public DateTime Fech { get; set; }
        public string Concepto { get; set; }
        public double Valor { get; set; }
        public int Mes { get; set; }
        public int Anio { get; set; }
    }
}
