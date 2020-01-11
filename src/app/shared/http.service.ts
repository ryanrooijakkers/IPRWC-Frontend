import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  private static buildOptions() {
    const head = new HttpHeaders({
      // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjUsImV4cCI6MTU3NTQ2NTM5NX0.BfiY2R5CoC13Xxs646k1ZXyOZ55WnfD1Ts8a7J1vdwE',
    });
    return {
      headers: head
    };
  }

  get(path: string) {
    const httpOptions = HttpService.buildOptions();
    return this.httpClient.get(path, httpOptions);
  }

  postForm(path: string, data: HttpParams) {
    const httpOptions = HttpService.buildOptions();
    httpOptions.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.post(path, data, httpOptions);
  }

  postJSON(path: string, data: string) {
    const httpOptions = HttpService.buildOptions();
    httpOptions.headers.set('Content-Type', 'application/json');
    return this.httpClient.post(path, data, httpOptions);
  }

  putJSON(path: string, data: string) {
    const httpOptions = HttpService.buildOptions();
    httpOptions.headers.set('Content-Type', 'application/json');
    return this.httpClient.put(path, data, httpOptions);
  }

  delete(path: string) {
    const httpOptions = HttpService.buildOptions();
    return this.httpClient.delete(path, httpOptions);
  }
}
