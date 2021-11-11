import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gif } from '../model/gif';
import { GifParams } from './dto/gif-params';

@Injectable({
  providedIn: 'root',
})
export class GifApiService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  get(params: GifParams) {
    let queryParams = '';

    params.q ? (queryParams += `?q=${params.q}`) : '';
    params.limit ? (queryParams += `&limit=${params.limit}`) : '';
    params.offset ? (queryParams += `&offset=${params.offset}`) : '';

    return this.http
      .get<Gif[]>(this.url + queryParams)
      .pipe(retry(3))
      .pipe(
        map((res: Gif[]): Gif[] => {
          console.log(res);
          return res.map((gif: Gif) => ({
            id: gif.id,
            query: params.q,
            title: gif.title,
            images: gif.images,
          }));
        })
      );
  }
}
