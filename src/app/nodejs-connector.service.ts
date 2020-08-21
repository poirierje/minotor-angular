import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPingResult } from '../app/iping-result';
import { ISite } from '../app/isite';

@Injectable({
  providedIn: 'root'
})

export class NodejsConnectorService {

  constructor(private http: HttpClient) { }

  getSites() {
    return this.http.get<ISite[]>('http://localhost:3000/sites');
  }

  getPingResults() {
    return this.http.get<IPingResult[]>('http://localhost:3000/ping-results');
  }
}
