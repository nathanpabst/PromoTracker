using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PromoTracker.DataAccess;

namespace PromoTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromoController : ControllerBase
    {
        private readonly PromoRepository _promos;

        public PromoController(IConfiguration config)
        {
            _promos = new PromoRepository(config);
        }

        [HttpGet]
        public IActionResult GetPromotions()
        {
            return Ok(_promos.GetPromotions());
        }
    }
}