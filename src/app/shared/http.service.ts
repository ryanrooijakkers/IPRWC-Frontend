import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  private static buildOptions() {
    const head = new HttpHeaders({
      Authorization: this.buildAuthHeader()
    });
    return {
      headers: head
    };
  }

  private static buildAuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
      return `Bearer ${user.authToken}`;
    }
    return '';
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

  putForm(path: string, data: HttpParams) {
    const httpOptions = HttpService.buildOptions();
    httpOptions.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.put(path, data, httpOptions);
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
