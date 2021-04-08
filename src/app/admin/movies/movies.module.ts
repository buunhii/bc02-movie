import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';


@NgModule({
  declarations: [MovieListComponent, AddMovieComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
