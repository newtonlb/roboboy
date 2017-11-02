/*
 * @title App
 * @description Application entry point
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import * as $ from 'jquery';
import {iControleDeAcesso, UsuarioSenha} from '@sistema/controledeacesso';
// talvez o teu editor indique erro aqui, mas @common = './sistema/common/index.ts'
import {Sessao} from '@sistema/common';

class Login{

  constructor(private controleDeAcesso:iControleDeAcesso){}

  logar(){
    let senha:string   = $('form.login #senha-input').val();
    let usuario:string = $('form.login #usuario-input').val();

    this.controleDeAcesso.logar(usuario, senha)
    .then((sessao:Sessao) => {
      console.log(sessao)
    })
    .catch((erro:Error) => {
      console.log(erro);
    });
  }
  cadastrar(){

  }
}

let loginPage = new Login(
  new UsuarioSenha()
);

// $(form#login-form).submit(loginPage.logar)
// $(form#cadastro-form).submit(loginPage.cadastrar)
