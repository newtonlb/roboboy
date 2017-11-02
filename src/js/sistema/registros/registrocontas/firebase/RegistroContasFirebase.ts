declare var fb;

import {iRegistroContas} from '..';
import {Usuario} from '@sistema/common';
/**
 * implementa interacao com o firebase
 */
export class RegistroContasFirebase implements iRegistroContas{

  create(usuario:Usuario):Promise<Usuario>{
    return new Promise<Usuario>((resolve, reject) => {

      db.set({
        nome: usuario.nome,
        endereco: usuario.endereco
      })

      resolve(usuario);

      if(deumerda)
        reject(new Error('deu merda'));
      
    })
  }
  update(usuario:Usuario):Promise<Usuario>{

  }
  delete(usuario:string):Promise<void>{

  }
  read(usuario:string):Promise<Usuario>{

  }

  exists(usuario:string, senha:string):Promise<Usuario>{

  }
}
