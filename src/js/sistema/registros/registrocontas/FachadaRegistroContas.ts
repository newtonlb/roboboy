import {Usuario, Error} from '@sistema/common';
import {iRegistroContas} from '.';
import {RegistroContasFirebase} from './firebase/RegistroContasFirebase';
/**
 * Verifica permissões e mapeia metodos da implementaçao (firebase/registrocontasfirebase.ts)
 */
export class FachadaRegistroContas implements iRegistroContas{

  private registro:iRegistroContas = new RegistroContasFirebase();


  create(usuario:Usuario):Promise<Usuario>{
    return new Promise<Usuario>((resolve, reject)=>{
      let erro = null;

      if(usuario.nome.length == 0)
        erro = new Error("Nome Inválido");
      else if(!usuario.endereco)
        erro = new Error('Endereço Inválido');
      else if(usuario.login.length == 0)
        erro = new Error('Login de usuario inválido');
      else if(usuario.senha.length == 0)
        erro = new Error('Senha Inválida');

      if(erro !== null)
        reject(erro);
      else
        this.registro
            .create(usuario)
            .then(resolve)
            .catch(reject)
    });
  }
  update(usuario:Usuario):Promise<Usuario>{

  }
  delete(usuario:string):Promise<void>{

  }
  read(usuario:string):Promise<Usuario>{

  }

  exists(usuario:string, senha:string):Promise<Usuario>{

    return new Promise<Usuario>((resolve, reject)=>{

      this.registro
          .exists(usuario, senha)
          .then(resolve)
          .catch(reject);

    });
  }
}
