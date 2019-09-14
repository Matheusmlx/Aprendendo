using CadastroUsuario.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CadastroUsuario.Controllers
{
    public class CursoController : Controller
    {
        // GET: Curso
        DBModels db = new DBModels();

        public ActionResult Listar()
        {
            return View(db.Curso.ToList());
        }
    }
}