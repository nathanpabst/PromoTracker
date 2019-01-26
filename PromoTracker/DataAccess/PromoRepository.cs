using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using PromoTracker.Models;

namespace PromoTracker.DataAccess
{
    public class PromoRepository
    {
        static List<Promotion> _promotions = new List<Promotion>();

        private readonly string ConnectionString;

        public PromoRepository(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public List<Promotion> GetPromotions()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Promotion>(@"SELECT 
                                                            Id = id,
                                                            Name = name,
                                                            Start = start,
                                                            End = end,
                                                            Desc = desc,
                                                            Category = category,
                                                            Restrictions = restrictions
                                                        FROM promotion");
                return result.ToList();
            }
        }
    }
}
