using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PromoTracker.Models
{
    public class Promotion
    {
        public string Name { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Desc { get; set; }
        public string Category { get; set; }
        public string Restrictions { get; set; }
        public int Id { get; set; }

    }
}
