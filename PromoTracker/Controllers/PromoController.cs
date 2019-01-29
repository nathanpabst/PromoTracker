using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PromoTracker.DataAccess;
using PromoTracker.Models;

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
            var promoList = _promos.GetPromotions();
            return Ok(promoList);
        }

        [HttpPost]
        public IActionResult PostPromo(Promotion promotion)
        {
            var newPromotion = _promos.PostPromo(promotion);
            return Ok(newPromotion);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePromo(int id)
        {
            var deletePromo = _promos.DeletePromoById(id);
            return Ok(deletePromo);
        }
    }
}