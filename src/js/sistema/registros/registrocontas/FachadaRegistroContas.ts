import {Usuario} from '@sistema/common';
import {iRegistroContas} from '.';
import {RegistroContasFirebase} from './firebase/RegistroContasFirebase';
/**
 * Verifica permissões e mapeia metodos da implementaçao (firebase/registrocontasfirebase.ts)
 */
export class FachadaRegistroContas implements iRegistroContas{

  private registro:iRegistroContas = new RegistroContasFirebase();

  create(usuario:Usuario):Promise<Usuario>{

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
