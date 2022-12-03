import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpService } from './http.service';
import { LivrosModel } from '../model/livrosModel';
import { IResultHttp } from '../interfaces/IResultHttp';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivrosService extends BaseService<LivrosModel> {

  constructor(public override http: HttpService) {
    super('livros', http);
  }


}