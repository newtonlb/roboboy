export abstract class Pizza{
  protected sabor:string;
  protected extras:string;
  protected preco:number;

  getSabor(){
    return this.sabor;
  }
  getExtras(){
    return this.extras;
  }
  getPreco(){
    return this.preco;
  }
}
export class PizzaBase extends Pizza{
  
}
