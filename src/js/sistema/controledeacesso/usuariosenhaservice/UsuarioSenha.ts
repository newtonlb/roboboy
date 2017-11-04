import {iControleAcesso} from '..';
import {iRegistroContas, FachadaRegistroContas} from '@sistema/registros/registrocontas';
import {Usuario, Sessao, Error} from '@sistema/common';

export class UsuarioSenha implements iControleAcesso{
  registro:iRegistroContas;

  constructor(){
      this.registro = new FachadaRegistroContas();
  }

  logar(usuario:string, senha:string):Promise<Sessao>{
    return new Promise<Sessao>((resolve, reject)=>{

      this.registro
        .exists(usuario, senha)
        .then(usuario=>resolve(Sessao.getInstance(usuario)))
        .catch(reject)

    })
  }
  cadastrar(usuario:Usuario):Promise<Usuario>{
    return new Promise<Usuario>((resolve, reject)=>{
      this.registro
        .create(usuario)
        .then(resolve)
        .catch(reject)
    })
  }
  logout():Promise<void>{
    return new Promise<void>((resolve, reject)=>{
      let sessao = Sessao.getInstance();
      let usuario = sessao.recover();

      if(usuario === false)
        reject(new Error('N tem nenhum usuário logado, caraia'));

      else{
        sessao.clear();
        resolve();
      }
    })
  }
}
