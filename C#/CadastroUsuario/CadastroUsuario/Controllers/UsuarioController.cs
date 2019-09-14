using CadastroUsuario.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;


namespace CadastroUsuario.Controllers
{
    public class UsuarioController : Controller
    {

        // GET: Usuario
        DBModels db = new DBModels();

        public ActionResult Listar()
        {
            

            return View(db.Pessoa.ToList());
        }
        public ActionResult Cadastrar()
        {

            return View();
        }

        [HttpPost]
        public ActionResult Cadastrar(Pessoa usuario)
        {
            db.Pessoa.Add(usuario);
            db.SaveChanges();
            return RedirectToAction("Listar");
        }
        //SO EXIBI
        public ActionResult Editar(int Id)
        {

            Pessoa usuario=db.Pessoa.Find(Id);

            return View(usuario);
        }
        //RECEBE DA TELA EDITAR
        [HttpPost]
        public ActionResult Editar(Pessoa usuario)
        {
            db.Pessoa.Add(usuario);


            //db.Usuario.AddOrUpdate(usuario) tomar cuidado
            //Manipulando
           db.Entry(usuario).State = EntityState.Modified;



            db.SaveChanges();
            return RedirectToAction("Listar");
        }

        public ActionResult Visualizar(int Id)
        {
            Pessoa usuario = db.Pessoa.Find(Id);

            return View(usuario);
        }

        public ActionResult Deletar(int Id)
        {
           

            Pessoa usuario = db.Pessoa.Find(Id);



            return View(usuario);
        }


        [HttpPost]
        public ActionResult Deletar(Pessoa usuario)
        {
            db.Pessoa.Add(usuario);

            db.Entry(usuario).State = EntityState.Deleted;

            db.SaveChanges();

            return RedirectToAction("Listar");
        }


    }
}