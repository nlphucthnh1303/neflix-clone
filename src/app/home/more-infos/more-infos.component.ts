import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { TmdbService } from '../../service/tmdb.service';
import { Movie } from '../../service/model/movie.model';
import { CommonModule, DatePipe } from '@angular/common';
@Component({
  selector: 'app-more-infos',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './more-infos.component.html',
  styleUrl: './more-infos.component.scss'
})
export class MoreInfosComponent implements OnInit, OnDestroy{
  

  public movieId: number = -1;

  tmdbService = inject(TmdbService);

  movie: Movie | undefined;

  getMovieById(): void {
    this.tmdbService.getMovieById(this.movieId);
  }

  constructor(){
    effect(() => {
      this.movie = this.tmdbService.movieById().value;
    })
  }


  ngOnInit(): void {
    this.getMovieById()
  }

  ngOnDestroy(): void {
    this.tmdbService.clearGetMovieById()
  }
}
