import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MoviesShowingComponent } from './movies-showing/movies-showing.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [HomeComponent, CarouselComponent, MoviesShowingComponent, CinemaListComponent, NewsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
