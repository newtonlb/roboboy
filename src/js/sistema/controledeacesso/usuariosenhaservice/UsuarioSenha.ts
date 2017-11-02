import {iControleAcesso} from '..';
import {Usuario, Sessao, Error} from '@sistema/common';

export class UsuarioSenha implements iControleAcesso{
  logar(usuario:string, senha:string):Promise<Sessao>{
    return new Promise<Sessao>((resolve, reject)=>{
      resolve({});
    })
  }
  cadastrar(usuario:Usuario):Promise<Usuario>{
    return new Promise<Usuario>((resolve, reject)=>{
      resolve({});
    })
  }
}
