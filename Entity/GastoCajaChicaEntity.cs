using System;
using System.Collections.Generic;
using System.Text;

namespace Entity
{
    public class GastoCajaChicaEntity
    {
        public GastoCajaChicaEntity()
        {
            this.Lineas = new List<Detalle_Gasto_Caja_ChicaEntity>();
        }
        public int Consecutivo { get; set; }
        public int Tipo_Gasto { get; set; }
        public DateTime Fecha { get; set; }
        public string Concepto { get; set; }
        public double Valor { get; set; }
        public int Mes { get; set; }
        public int Anio { get; set; }
        public List<Detalle_Gasto_Caja_ChicaEntity> Lineas { get; set; }
    }
}
