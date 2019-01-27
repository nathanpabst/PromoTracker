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
        //static List<Promotion> _promotions = new List<Promotion>();

        private readonly string ConnectionString;

        public PromoRepository(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public IEnumerable<Promotion> GetPromotions()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Promotion>(@"SELECT *
                                                            
                                                        FROM promotion");
                return result;
                //return result.ToList();
            }
        }
    }
}
