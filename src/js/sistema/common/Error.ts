import {Entity} from './Entity';

export class Error extends Entity{

  constructor(private message:string){
    super(true);
  }
  getMessage():string{
    return this.message;
  }
}
