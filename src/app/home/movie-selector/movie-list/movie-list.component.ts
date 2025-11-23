import { Component, effect, inject, Input, OnInit } from '@angular/core';
import { TmdbService } from '../../../service/tmdb.service';
import { Movie } from '../../../service/model/movie.model';
import { MovieCardComponent } from "./movie-card/movie-card.component";

export type Mode = 'GENRE' | 'TREND'

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent  implements OnInit{
  @Input() genreId: number = -1;

  @Input() mode: Mode = 'GENRE'
  
  tmdbService:TmdbService = inject(TmdbService);

  moviesByGenre: Movie[] | undefined;
  trendMovies: Movie[] | undefined;


  constructor(){
    effect(() => {
      if(this.mode === 'GENRE'){
        const movieByGenreResponse = this.tmdbService.moviesByGenre().value;
        if(movieByGenreResponse?.genreId === this.genreId){
          this.moviesByGenre = movieByGenreResponse.results;
        }
      }else if(this.mode === 'TREND'){
        const trendingMoviesResponse = this.tmdbService.fetchTrendMovies().value;
        if(trendingMoviesResponse){
          this.trendMovies = trendingMoviesResponse.results;
        }
      }
    })
  }

  ngOnInit(): void {
    this.fetchMoviesByGenre();
    this.getTrends();
  }

  private fetchMoviesByGenre():void {
    this.tmdbService.getMoviesByGenre(this.genreId);
  }

  private getTrends():void{
    this.tmdbService.getTrends();
  }

}
