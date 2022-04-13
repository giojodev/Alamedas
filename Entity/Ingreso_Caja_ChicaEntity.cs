using System;
using System.Collections.Generic;
using System.Text;

namespace Entity
{
    public class Ingreso_Caja_ChicaEntity
    {
        public Ingreso_Caja_ChicaEntity()
        {
            this.Lineas = new List<Detalle_Ingreso_Caja_ChicaEntity>();
        }
        public int CONSECUTIVO { get; set; }
        //public int IDUSUARIO { get; set; }
        public int TIPO_INGRESOC { get; set; }
        public DateTime FECHA { get; set; }
        public string CONCEPTO { get; set; }
        public double TOTAL { get; set; }
        public int MES { get; set; }
        public int ANIO { get; set; }
        public List<Detalle_Ingreso_Caja_ChicaEntity> Lineas { get; set; }
    }
}
