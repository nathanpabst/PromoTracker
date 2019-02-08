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
            }
        }

        public IEnumerable<TitleCountWithPromo> GetAggregatedTitleData()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<TitleCountWithPromo>(@"SELECT COUNT(DISTINCT (b.id)) AS TitleCount,
                                                                        p.name AS PromotionName
                                                                    FROM [dbo].[book] AS b
                                                                    LEFT JOIN promotion AS p ON b.promoId = p.id
                                                                    GROUP BY p.name");

                return result;
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

        public IEnumerable<Promotion> GetPromoById(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Promotion>(@"SELECT * FROM [dbo].[promotion] WHERE id = @Id", new { id });
                return result;
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

        public bool UpdatePromoInfo(int id, Promotion promotion)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                var result = connection.Execute(@"UPDATE [dbo].[promotion]
                                                    SET [name] = @Name,
                                                        [start] = @Start,
                                                        [end] = @End,
                                                        [desc] = @Desc,
                                                        [category] = @Category,
                                                        [restrictions] = @Restrictions
                                                    WHERE id = @Id",
                                                    new
                                                    {
                                                        id,
                                                        promotion.Name,
                                                        promotion.Start,
                                                        promotion.End,
                                                        promotion.Desc,
                                                        promotion.Category,
                                                        promotion.Restrictions
                                                    });
                return result == 1;
            }
        }
    }
}

