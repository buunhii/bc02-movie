import { MovieService } from '@/core/service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  form: any = {
    tenPhim: 'Tom & Jerry',
    biDanh: 'tom & jerry',
    trailer: 'https://youtu.be/fgqEyC19538',
    hinhAnh: '',
    moTa: 'Tom & Jerry',
    maNhom: 'GP01',
    ngayKhoiChieu: '30/04/2021', // Phải dùng đinh dạng dd/mm/yyyy
    danhGia: 0,
  };
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}
  handleChangeFile(evt: any) {
    const file = evt.target.files[0];
    this.form.hinhAnh = file;
  }
  handleAddMovie() {
    // Gọi API thêm phim
    console.log(this.form);
    this.movieService.addMovie(this.form).subscribe();
  }
}
