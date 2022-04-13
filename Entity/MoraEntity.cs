using System;
using System.Collections.Generic;
using System.Text;

namespace Entity
{
    public class MoraEntity
    {
        public string Id_Mora { get; set; }
        public DateTime Fecha { get; set; }
        public int Condomino { get; set; }
        public string Concepto { get; set; }
        public string Estado { get; set; }
        public int Dias_Vencido { get; set; }
        public string Mes { get; set; }
        public string Anio { get; set; }
        public double Valor { get; set; }
    }
}
