import {Usuario} from '.';

export class Sessao{
  static readonly SESSION_KEY = 'roboboy_session';
  private static instance = null;

  private constructor(public usuario:Usuario){
    if(Sessao.instance !== null)
      throw 'Sessao já existe';
  }
  public static getInstance(usuario?:Usuario){
    if(Sessao.instance === null)
       Sessao.instance = new Sessao(usuario);

    return Sessao.instance;
  }
  store(){
    let usuario = JSON.stringify(this.usuario);
    localStorage.setItem(Sessao.SESSION_KEY, usuario);

    return this;
  }
  recover(){
    let usuario = localStorage.getItem(Sessao.SESSION_KEY);

    if(usuario == null)
      return false;

    return JSON.parse(usuario);
  }
  clear(){
    localStorage.removeItem(Sessao.SESSION_KEY);
    Sessao.instance = null;

    return this;
  }
}
