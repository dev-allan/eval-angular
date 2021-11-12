import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${environment.apiUrl}/films`);
  }

  createFilm(film: Film): Observable<Film>{
    return this.http.post<Film>(`${environment.apiUrl}/films`, film)
  }
}
