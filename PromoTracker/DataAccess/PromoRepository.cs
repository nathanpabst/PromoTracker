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

        public bool PostPromo(Promotion promotion)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Execute(@"INSERT INTO [dbo].[promotion]
                                                    ([name], [start], [end], [desc], [category], [restrictions])
                                                VALUES(@name, @start, @end, @desc, @category, @restrictions)", promotion);
                return result == 1;
            }
        }

        public bool DeletePromoById(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Execute(@"DELETE FROM [dbo].[promotion] WHERE id = @Id", new { id} );

                return result == 1;
            }
        }
    }
}
