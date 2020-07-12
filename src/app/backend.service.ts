import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiString:string = ''

  constructor(private http: HttpClient) {
    this.apiString = 'https://cors-anywhere.herokuapp.com/' + 'http://aryu.co.in/tracking/viewreport.php';
  }

  getProfiles(): Observable<any> {
    return this.http.get(this.apiString);
  }
  getProfileData(id: any): Observable<any> {
    const url = `${this.apiString}/${id}`;
    return this.http.get(url);
  }
}
