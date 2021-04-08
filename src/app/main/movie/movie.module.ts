import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { ShowTimeComponent } from './show-time/show-time.component';
import { MovieComponent } from './movie.component';


@NgModule({
  declarations: [MovieInfoComponent, ShowTimeComponent, MovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
