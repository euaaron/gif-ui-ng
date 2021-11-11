import { Injectable } from '@angular/core';
import { GifApiService } from '../gif/services/gif-api.service';

@Injectable({
  providedIn: 'root',
})
export class GifsRepository {
  private offset: number = 0;
  private lastSearchTerm: string = '';
  public limit: number = 8;

  constructor(private api: GifApiService) {}

  public get(input?: string) {
    if (input) {
      this.lastSearchTerm = input;
      this.offset = 0;
      return this.search(input);
    }
    if (this.lastSearchTerm) {
      this.offset = this.limit + 1;
      return this.search(this.lastSearchTerm);
    } else {
      return this.search('trending');
    }
  }

  private search(input: string) {
    return this.api.get({
      q: input,
      limit: this.limit,
      offset: this.offset,
    });
  }
}
