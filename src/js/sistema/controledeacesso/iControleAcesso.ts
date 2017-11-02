import {Usuario, Sessao} from '@sistema/common';

export interface iControleDeAcesso{
  logar(usuario:string, senha:string):Promise<Sessao>;
  cadastrar(usuario:Usuario):Promise<Usuario>;
}
