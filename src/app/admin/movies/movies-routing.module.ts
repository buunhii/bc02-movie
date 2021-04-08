import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'add', component: AddMovieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
