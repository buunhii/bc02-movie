import { Component, OnInit } from '@angular/core';
import { MovieService } from '@/core/service/movie.service';
import { MovieResult } from '@/core/models/movie';
@Component({
  selector: 'app-movies-showing',
  templateUrl: './movies-showing.component.html',
  styleUrls: ['./movies-showing.component.scss'],
})
export class MoviesShowingComponent implements OnInit {
  // tạo biến hứng data
  movieList: MovieResult[] = [];
  //service: khai báo bên trong constructor mới sử dụng dc
  constructor(private movieSevice: MovieService) {}
  //private : muốn đặt gi cũng dc
  // lifecycle của angular tương dương componentDidMount chạy 1 lần sau khi render

  ngOnInit(): void {
    // promise để lấy kết quả ta .then .catch hoặc sử dụng async await
    // đối với observable ta sẽ .subscribe
    this.movieSevice.getMovieList().subscribe({
      // tự động nhảy vào next khi call API thnahf công
      next: (result) => {
        // console.log(result);
        this.movieList = result;
        console.log(this.movieList);
      },
      // Tự động nhả vào error khi call API thất bại
      error: (error) => {
        console.log(error);
      },
      // Được chạy sau khi callback next khi call API thành công
      complete: () => {
        console.log('DONE!');
      },
    });

    console.log(this.movieList);
  }
}
// b1 imp service đó
// b2 khai báo service
