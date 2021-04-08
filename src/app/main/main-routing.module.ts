import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { MovieModule } from './movie/movie.module';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: () => HomeModule },
      { path: 'movie/:movieId', loadChildren: () => MovieModule },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
