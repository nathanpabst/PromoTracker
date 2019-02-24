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

        public IEnumerable<SumByOrderType> GetOrderTypeRatio()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<SumByOrderType>(@"SELECT SUM(quantity) AS [quantity],
                                                                    x.type AS [name]
                                                                FROM [dbo].[order] AS o
                                                                JOIN orderType AS x ON o.orderTypeId = x.id
                                                                GROUP BY x.type"
                                                                );
                return result.ToList();
            }
        }

        public IEnumerable<UnitsShipped> GetUnitsShipped()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                var result = connection.Query<UnitsShipped>(@"SELECT SUM(o.quantity) AS [value],
                                                                p.name AS [name]
                                                            FROM [dbo].[order] AS o
                                                            LEFT JOIN book AS b ON o.id = b.id
                                                            LEFT JOIN promotion AS p ON b.promoId = p.id
                                                            GROUP BY p.name");

                return result.ToList();
            }
        }

        public IEnumerable<OrdersWithPromo> GetAggregatedOrderData()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<OrdersWithPromo>(@"SELECT SUM(printFee) AS [value],
		                                                             p.name AS [group],
		                                                            'Print Fees' as [name]
                                                                FROM [dbo].[order] AS o
                                                                LEFT JOIN book AS b ON o.id = b.id
                                                                LEFT JOIN promotion AS p ON b.promoId = p.id
                                                                GROUP BY p.name
                                                                UNION
                                                                SELECT SUM(o.quantity) AS [value],
		                                                            p.name AS [group],
		                                                            'Units Shipped' as [name]
                                                                FROM [dbo].[order] AS o
                                                                LEFT JOIN book AS b ON o.id = b.id
                                                                LEFT JOIN promotion AS p ON b.promoId = p.id
                                                                GROUP BY p.name"
                                                                );
                return result.ToList();
            }
        }
        
    }
}
