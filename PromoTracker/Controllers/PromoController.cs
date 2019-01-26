using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using PromoTracker.DataAccess;

namespace PromoTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromoController : ControllerBase
    {
        private readonly PromoRepository _repository;

        public PromoController(PromoRepository repository)
        {
            _repository = repository;
        }
    }
}