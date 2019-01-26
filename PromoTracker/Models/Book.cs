using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PromoTracker.Models
{
    public class Book
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public long Isbn { get; set; }
        public int PromoId { get; set; }
        public string Title { get; set; }
        public string Status { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
