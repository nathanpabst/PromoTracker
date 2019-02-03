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
    public class OrderRepository
    {
        private readonly string ConnectionString;

        public OrderRepository(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public IEnumerable<Order> GetOrders()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Order>(@"SELECT * FROM [dbo].[order]");
                return result;
            }
        }

        
    }
}
