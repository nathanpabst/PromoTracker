using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PromoTracker.Models
{
    public class OrdersWithPromo
    {
        public string Name { get; set; }
        public long PrintFees { get; set; }
        public long UnitsShipped { get; set; }
    }
}
