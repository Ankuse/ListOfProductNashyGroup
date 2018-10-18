import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GoodsListService {

  constructor(
      private http: HttpClient
  ) { }

  public getGoodsList (): Observable<any> {
    return this.http.get(`${environment.remoteSite}/api/goods/list/`);
  }
}
