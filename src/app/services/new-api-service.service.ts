import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewApiServiceService {

  constructor(private http: HttpClient) { }

  newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=725de87f44e548bcb786ff15991612bf"

  techUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=725de87f44e548bcb786ff15991612bf"

  businessUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=725de87f44e548bcb786ff15991612bf"
  
  topHeading(): Observable<any> {
    return this.http.get(this.newsUrl)
  }
  techNews(): Observable<any> {
    return this.http.get(this.techUrl)
  }

  businessNews(): Observable<any> {
    return this.http.get(this.businessUrl)
  }
}
