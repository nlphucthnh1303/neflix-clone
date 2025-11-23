import { Component, effect, inject } from '@angular/core';
import { TmdbService } from '../../service/tmdb.service';
import { Movie } from '../../service/model/movie.model';
import { FaIconComponent, FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FaIconComponent, FontAwesomeModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  tmdbService: TmdbService =  inject(TmdbService);

  trendMovie: Movie | undefined

  constructor() {
    effect(() => {
      const trendMovieResponse = this.tmdbService.fetchTrendMovies().value;
      if(trendMovieResponse) {
        this.trendMovie = trendMovieResponse.results[0];
      }
    });
  }

  fetchMovieTrends(): void {
    this.tmdbService.getTrends();
  }

  ngOnInit(): void {
    this.fetchMovieTrends()
  }


}
