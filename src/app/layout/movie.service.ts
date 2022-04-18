import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = environment.baseUrl;
  apiKey = environment.apiKey;
  language = environment.language;

  constructor(
    private http: HttpClient
  ) { }

  searchMovie(query: string): Observable<any> {
    let url = `${this.url}/search/movie?api_key=${this.apiKey}&language=${this.language}&query=${query}`;
    return this.http.get<any>(`${url}`);
  }
}
