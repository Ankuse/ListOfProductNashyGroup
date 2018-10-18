import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
// import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PictureListService {

  constructor(
      private http: HttpClient
  ) { }

  public getPictureById (idPicture): Observable<any> {
    return this.http.get(`${environment.remoteSite}/api/picture/list/`, {
      headers: new HttpHeaders()
          .append('Authorization-Login', 'admin')
          .append('Authorization-Password', '03Shinglas+nashi'),
      params: new HttpParams().set('id', idPicture)
    });
  }
}
