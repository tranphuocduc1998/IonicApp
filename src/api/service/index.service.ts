/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private ROOTURL = 'http://192.168.1.93:8000';

  BASRURL = this.ROOTURL + '/api';

  constructor(private http: HttpClient) {
  }

  callAPI(
    api: string,
    body?: object | null,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST'
  ): Observable<any> {
    return this.httpAPI(this.BASRURL + api, body, method);
  }

  private httpAPI(api: string,
    body?: object | null,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST') {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: localStorage.getItem(environment.envi_key.token) ? localStorage.getItem(environment.envi_key.token) : '',
      })
    };

    try {
      if (method === 'GET') {
        return this.http.get(api, httpOptions);
      } else if (method === 'POST') {
        return this.http.post(api, body, httpOptions);
      } else if (method === 'PUT') {
        return this.http.put(api, body, httpOptions);
      } else {
        return Observable.create(observer => {
          observer.next({
            code: 404,
            name: 'Not Found!',
            message: 'response not exsits.',
            data: null,
          });
          observer.complete();
        });
      }
    } catch (error) {
      return Observable.create(observer => {
        observer.next({
          code: 500,
          name: 'Error',
          message: error,
          data: null,
        });
        observer.complete();
      });
    }
  }
}
