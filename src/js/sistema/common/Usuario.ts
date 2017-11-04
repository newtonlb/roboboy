import {Endereco} from '.';
export class Usuario{
  static readonly TIPO_CLIENTE:number = 0;
  static readonly TIPO_PIZZARIA:number = 1;

  id:string;
  nome:string;
  login:string;
  endereco: Endereco;
  tipo:number;
  senha:string;
}
