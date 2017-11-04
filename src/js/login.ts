/*
 * @title App
 * @description Application entry point
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import * as $ from 'jquery';
import {iControleAcesso, UsuarioSenha} from '@sistema/controledeacesso';
import {Sessao, Endereco, Usuario} from '@sistema/common';

class Login{
  readonly MESSAGE_TYPE_ERROR = 0;
  readonly MESSAGE_TYPE_INFO  = 1;

  constructor(private controleDeAcesso:iControleAcesso){}

  logar(usuario:string, senha:string){


    this.controleDeAcesso
      .logar(usuario, senha)
        .then((sessao:Sessao) => {

          sessao.store();
          this.showInfoMessage(`Logado como ${sessao.usuario.login}`);
        })
        .catch((erro:Error) => {
          this.showErrorMessage(erro.message);
        });
  }
  cadastrar(usuario:Usuario){
    this.controleDeAcesso
      .cadastrar(usuario)
        .then((usuario:Usuario)=>{
          this.logar(usuario.login, usuario.senha)
        })
        .catch((erro:Error) => {
          this.showErrorMessage(erro.message);
        });
  }
  logout(){
    this.controleDeAcesso
      .logout()
      .then(()=>this.showInfoMessage('Té mais..'))
      .catch(erro=>this.showErrorMessage(erro.message));
  }
  showMessage(message:any, type:number = -1){
    switch(type)
    {
      case this.MESSAGE_TYPE_ERROR:
        console.error(message); break;
      case this.MESSAGE_TYPE_INFO:
        console.info(message); break;
      default:
        console.log(message);
    }
  }
  showInfoMessage(message:any){
    this.showMessage(message, this.MESSAGE_TYPE_INFO);
  }
  showErrorMessage(message:any){
    this.showMessage(message, this.MESSAGE_TYPE_ERROR);
  }
}
(<any>window).logout = function(){
  // logout global
  loginPage.logout();
}
let loginPage = new Login(
  new UsuarioSenha()
);

// $(form#cadastro-form).submit(loginPage.cadastrar)
// setTimeout(()=>{
//   let endereco:Endereco = new Endereco()
//       endereco.rua = 'Barão de Santo Ângelo';
//       endereco.numero = '55';
//
//   let nome:string    = 'Pedro Torchio';
//   let senha:string   = '1234';
//   let login:string = 'princesafrozen'
//
//   let usuario = new Usuario();
//       usuario.nome = nome;
//       usuario.endereco = endereco;
//       usuario.login = login;
//       usuario.senha = senha;
//
//   loginPage.cadastrar(usuario);
// }, 2000);
// $(form#login-form).submit(loginPage.logar)
setTimeout(()=>{
  let senha:string   = '1234';
  let usuario:string = 'princesafrozen'

  loginPage.logar(usuario, senha);
}, 2000);
