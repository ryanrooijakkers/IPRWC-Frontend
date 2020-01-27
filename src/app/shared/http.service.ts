import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Image} from '../products/image.model';
import {environment} from '../../environments/environment.prod';

@Injectable({providedIn: 'root'})
export class HttpService {
  path = environment.path;

  constructor(private httpClient: HttpClient) {}

  private static buildOptions() {
    const head = new HttpHeaders({
      Authorization: HttpService.buildAuthHeader()
    });
    return {
      headers: head
    };
  }

  private static buildOptionsContentType(contentType: string) {
    const head = new HttpHeaders({
      Authorization: HttpService.buildAuthHeader(),
      'Content-Type': contentType
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
    return this.httpClient.get(this.path + path, httpOptions);
  }

  postForm(path: string, data: HttpParams) {
    const httpOptions = HttpService.buildOptionsContentType('application/x-www-form-urlencoded');
    return this.httpClient.post(this.path + path, data, httpOptions);
  }

  putForm(path: string, data: HttpParams) {
    const httpOptions = HttpService.buildOptionsContentType('application/x-www-form-urlencoded');
    return this.httpClient.put(this.path + path, data, httpOptions);
  }

  putJSON(path: string, data: string) {
    const httpOptions = HttpService.buildOptionsContentType('application/json');
    return this.httpClient.put(this.path + path, data, httpOptions);
  }

  delete(path: string) {
    const httpOptions = HttpService.buildOptions();
    return this.httpClient.delete(this.path + path, httpOptions);
  }

  getImageURL(image: Image) {
    return this.path + 'images/' + image.id;
  }

  postMultiPart(path: string, data: FormData) {
    const httpOptions = HttpService.buildOptions();
    return this.httpClient.post(this.path + path, data, httpOptions);
  }
}
