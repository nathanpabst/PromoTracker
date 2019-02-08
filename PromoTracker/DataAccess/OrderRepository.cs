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

        public IEnumerable<OrdersWithPromo> GetAggregatedOrderData()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<OrdersWithPromo>(@"SELECT SUM(printFee) AS PrintFees,
                                                                    SUM(quantity) AS UnitsShipped,
                                                                    p.name AS Name
                                                                FROM [dbo].[order] AS o
                                                                    LEFT JOIN book AS b ON o.id = b.id
                                                                    LEFT JOIN promotion AS p ON b.promoId = p.id
                                                                GROUP BY p.name"                   
                                                                );
                return result.ToList();
            }
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
