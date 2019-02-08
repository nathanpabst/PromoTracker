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

        [HttpGet("titles")]
        public IActionResult GetAggregatedTitleData()
        {
            var titleCount = _promos.GetAggregatedTitleData();
            return Ok(titleCount);
        }

        [HttpGet("{id}")]
        public IActionResult GetPromoById(int id)
        {
            var getById = _promos.GetPromoById(id);
            return Ok(getById);
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

        [HttpPut("{id}")]
        public IActionResult UpdatePromo(int id, Promotion promotion)
        {
            var replaceValues = _promos.UpdatePromoInfo(id, promotion);
            return Ok(replaceValues);
        }
    }
}