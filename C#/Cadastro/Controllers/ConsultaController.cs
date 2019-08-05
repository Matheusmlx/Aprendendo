using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CadastrodePessoas.Controllers
{
    public class ConsultaController : Controller
    {
        [Authorize]
        public ActionResult ConsultaPessoa()
        {
            return View();
        }
    }
}