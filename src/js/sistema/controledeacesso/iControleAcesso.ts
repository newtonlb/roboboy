import {Usuario, Sessao} from '@sistema/common';

export interface iControleAcesso{
  logar(usuario:string, senha:string):Promise<Sessao>;
  cadastrar(usuario:Usuario):Promise<Usuario>;
  logout():Promise<void>;
}
