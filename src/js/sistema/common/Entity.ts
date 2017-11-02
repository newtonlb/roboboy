export class Entity{

  constructor(private error:boolean = false){}

  isError():boolean{
    return this.error;
  }

}
