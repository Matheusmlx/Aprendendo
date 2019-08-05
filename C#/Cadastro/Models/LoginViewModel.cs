using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CadastrodePessoas.Models
{
    public class LoginViewModel
    {
        [Required]
        [Display(Name="Usaurio:")]
        //Atalho para criar digita prop
        public string Usuario { get; set; }
        [Display(Name = "Senha:")]
        [Required]
        [DataType(DataType.Password)]
        public string Senha { get; set; }
        [Display(Name = "Lembrar Me:")]
        public bool LembrarMe { get; set; }

    }
}