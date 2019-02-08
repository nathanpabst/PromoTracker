using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PromoTracker.DataAccess;
using PromoTracker.Models;
using Microsoft.Extensions.Configuration;

namespace PromoTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly OrderRepository _orders;

        public OrderController(IConfiguration config)
        {
            _orders = new OrderRepository(config);
        }

        [HttpGet]
        public IActionResult GetAggregatedOrderData()
        {
            var orderDataList = _orders.GetAggregatedOrderData();
            return Ok(orderDataList);
        }

        [HttpGet]
        public IActionResult GetOrders()
        {
            var orderList = _orders.GetOrders();
            return Ok(orderList);
        }

        
    }
}