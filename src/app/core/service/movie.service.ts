import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResult, MovieShowtimes } from '../models/movie';
// ng g service [service-name]
// ng g s [service-name]
@Injectable({
  // Tự động khai báo service vào trong provider
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  // khai báo  HttpClient cho constructor
  getMovieList(): Observable<MovieResult[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim';

    const params = {
      maNhom: 'GP01',
    };
    return this.http.get<MovieResult[]>(url, { params });
  }

  getShowtimesMovie(movidId: string): Observable<MovieShowtimes> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim';
    const params = {
      maPhim: movidId,
    };
    return this.http.get<MovieShowtimes>(url, { params });
  }
  addMovie(movie: any) {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh';
    // Chuyển thành FormData đễ có thể lưu trữ dữ liệu đặc biệt như File và gửi lên server
    const formData = new FormData();

    for (let key in movie) {
      formData.append(key, movie[key]);
    }
    // return this.http.post(url, movie);
    return this.http.post(url, formData);
  }
}
