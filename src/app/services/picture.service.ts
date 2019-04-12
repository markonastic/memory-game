import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) {}

  getJSON() {
    return this.http.get('./../assets/pictures.json');
  }
}
