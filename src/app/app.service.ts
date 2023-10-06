import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public get(path: string, options?: any) {
    return this.http.get(`${this.apiUrl}/${path}`, options);
  }

  public post(path: string, data: any, options?: any) {
    return this.http.post(`${this.apiUrl}/${path}`, data, options);
  }

  public put(path: string, data: any, options?: any) {
    return this.http.put(`${this.apiUrl}/${path}`, data, options);
  }

  public delete(path: string, options?: any) {
    return this.http.delete(`${this.apiUrl}/${path}`, options);
  }

}
