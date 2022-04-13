using System;
using System.Collections.Generic;
using System.Text;

namespace Entity
{
    public class IngresosEntity
    {
        public IngresosEntity()
        {
            this.Lineas = new List<DetalleIngresoEntity>();
        }
        public int Consecutivo { get; set; }
        public string Nombre_Inquilino { get; set; }
        public int Tipo_Ingreso { get; set; }
        public DateTime Fecha { get; set; }
        public string Concepto { get; set; }
        public double Total { get; set; }
        public int Mes { get; set; }
        public int Anio { get; set; }
        public List<DetalleIngresoEntity> Lineas { get; set; }
    }
}
