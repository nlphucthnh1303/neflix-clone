import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, WritableSignal, signal, computed, Signal } from '@angular/core';
import { MovieApiResponse } from '../service/model/movie.model';
import { State } from './model/state.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  http: HttpClient = inject(HttpClient); // Yêu cầu HttpClient

  baseUrl: string = 'https://api.themoviedb.org/';

  private fetchTrendMovies$: WritableSignal<State<MovieApiResponse, HttpErrorResponse>> 
    = signal(State.Builder<MovieApiResponse, HttpErrorResponse>().forInit().build());
  fetchTrendMovies: Signal<State<MovieApiResponse, HttpErrorResponse>> = computed(() => this.fetchTrendMovies$());

  getTrends(): void {
      this.http.get<MovieApiResponse>(
        `${this.baseUrl}/3/trending/movie/day`, {headers: this.getHeaders()})
        .subscribe({
          next: tmdbResponse =>
            this.fetchTrendMovies$
              .set(State.Builder<MovieApiResponse, HttpErrorResponse>()
                .forSuccess(tmdbResponse).build()),
          error: err => {
            this.fetchTrendMovies$
              .set(State.Builder<MovieApiResponse, HttpErrorResponse>()
                .forError(err).build())
          }
        });
  }

  getAllGenres(): void {
      this.http.get<MovieApiResponse>(
        `${this.baseUrl}/3/trending/movie/day`, {headers: this.getHeaders()})
        .subscribe({
          next: tmdbResponse =>
            this.fetchTrendMovies$
              .set(State.Builder<MovieApiResponse, HttpErrorResponse>()
                .forSuccess(tmdbResponse).build()),
          error: err => {
            this.fetchTrendMovies$
              .set(State.Builder<MovieApiResponse, HttpErrorResponse>()
                .forError(err).build())
          }
        });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${environment.TMDB_API_KEY}`);
  }

  getImageURL(id: string, size: 'original' | 'w-500' | 'w-200'): string {
    return `https://image.tmdb.org/t/p/${size}/${id}`;
  }

  constructor() { }
}
