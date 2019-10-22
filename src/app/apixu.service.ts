import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}
    getWeather(location) {
      return this.http.get(
        'https://home.openweathermap.org/api_keys/?key=e6fa5f0893e71771498fe5f9733addd7&q=' + location
      );

  }
}
