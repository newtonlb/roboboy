import {Usuario} from '@sistema/common';
import {iCrud} from '../iCrud';

export interface iRegistroContas extends iCrud<Usuario>{
  exists(usuario:string, senha:string):Promise<Usuario>;
}
