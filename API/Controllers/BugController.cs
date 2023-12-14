using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BugController : BaseApiController
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
