import { MovieService } from 'src/app/core/service/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { MovieService } from '@/core/service/movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        this.movieService.getShowtimesMovie(params.movieId).subscribe({
          next: (result) => {
            console.log(result);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });
  }
}
