import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PictureListService {

  constructor(
      private http: HttpClient
  ) { }

  public getPictureById (idPicture): Observable<any> {
    return this.http.get(`${environment.remoteSite}/api/picture/list/`, {
      params: new HttpParams().set('id', idPicture)
    });
  }
}
