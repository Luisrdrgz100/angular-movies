import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  constructor(
    private http: HttpClient
  ) { }

    getCategory(cat, page = 1){
      let url = `https://api.themoviedb.org/3/movie/${cat}?api_key=d54ad896377e7becc1db63bc204b0ec0&page${page}&language=es-ES`;
      return this.http.get(url);
    }
    getDetails(id){
      let url = `https://api.themoviedb.org/3/movie/${id}?api_key=d54ad896377e7becc1db63bc204b0ec0&language=es-ES`;
      return this.http.get(url);
    }
    getSimilar(id){
      let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=d54ad896377e7becc1db63bc204b0ec0&language=es-ES`;
      return this.http.get(url);
    }
    searchMovies(query){
      let url = `https://api.themoviedb.org/3/search/movie?api_key=d54ad896377e7becc1db63bc204b0ec0&query=${query}`;
      return this.http.get(url)
    }
}
