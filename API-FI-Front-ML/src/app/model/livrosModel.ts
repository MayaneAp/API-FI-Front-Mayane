import { BaseModel } from './baseModel';

export class LivrosModel extends BaseModel {  
  title: string | undefined;  
  author: string | undefined; 
  year: number| undefined;
}