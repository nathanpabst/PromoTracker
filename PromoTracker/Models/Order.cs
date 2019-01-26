using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PromoTracker.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int OrderNumber { get; set; }
        public int BookId { get; set; }
        public DateTime OrderDate { get; set; }
        public long Quantity { get; set; }
        public int OrderTypeId { get; set; }
        public long PrintFee { get; set; }
    }
}
