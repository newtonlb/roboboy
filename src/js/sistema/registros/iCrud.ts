
export interface iCrud<T>{
  create(tipo:T)      :Promise<T>;
  update(tipo:T)      :Promise<T>;
  delete(id:string)   :Promise<void>;
  read(id:string)     :Promise<T>;
}
