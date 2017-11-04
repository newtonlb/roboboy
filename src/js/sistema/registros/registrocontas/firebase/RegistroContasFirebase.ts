declare var fb;

import {iRegistroContas} from '..';
import {Usuario, Endereco} from '@sistema/common';
/**
 * implementa interacao com o firebase
 */

export class RegistroContasFirebase implements iRegistroContas{

  create(usuario:Usuario):Promise<Usuario>{
    return new Promise<Usuario>((resolve, reject) => {
      // simulando dados vindos do banco de dados
      let usuario = getUserFromFirebaseSimulado();
      resolve(usuario);
    })
  }
  update(usuario:Usuario):Promise<Usuario>{

  }
  delete(usuario:string):Promise<void>{

  }
  read(usuario:string):Promise<Usuario>{

  }

  exists(usuario:string, senha:string):Promise<Usuario>{
    return new Promise<Usuario>((resolve, reject) => {
      //simulando dados vindos do banco de dados
      // as vezes usuario existe, outras vezes não

      if(Math.floor(Math.random() * 17) % 2 == 0)

        resolve(getUserFromFirebaseSimulado());

      else
        reject(getErrorSenhaFromFirebaseSimulado());

    })

  }
}
function getErrorSenhaFromFirebaseSimulado(){
  return new Error('Senha Incorreta');
}
function getUserFromFirebaseSimulado(){
  // simulando dados vindos do banco de dados
  let endereco:Endereco = new Endereco()
      endereco.rua = 'Barão de Santo Ângelo';
      endereco.numero = '55';

  let nome:string    = 'Pedro Torchio';
  let login:string = 'princesafrozen'

  let usuario = new Usuario();
      usuario.id = `${Math.floor(Math.random() * 999999)}`;
      usuario.nome = nome;
      usuario.endereco = endereco;
      usuario.login = login;

  return usuario;
}
