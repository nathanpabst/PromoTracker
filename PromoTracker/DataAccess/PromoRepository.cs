using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace PromoTracker.DataAccess
{
    public class PromoRepository
    {

        private readonly string ConnectionString;

        public PromoRepository(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

    }
}
