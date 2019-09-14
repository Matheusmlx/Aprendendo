using CadastroUsuario.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CadastroUsuario.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Acessar(string login,string password)
        {
            DBModels db = new DBModels();
            //Criando variavel para verificar se existe um cadastro no banco
           bool acessoConfirmado= db.Pessoa.Any(u=>u.Email==login && u.Senha==password);

            if (acessoConfirmado)
            {
                return RedirectToAction("Index", "Home");
            }
           

            return RedirectToAction("Index","Login");
        }
    }
}