import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodejsConnectorService {

  constructor(private http: HttpClient) { }

  getSites() {
    return this.http.get('http://localhost:3000/sites');
  }
}
