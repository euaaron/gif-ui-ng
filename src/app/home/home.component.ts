import { Component, OnInit } from '@angular/core';
import { Gif } from '../gif/model/gif';
import { GifsRepository } from '../search/gifs.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public gifs: Gif[] = [];
  public gifsHistory: Gif[] = [];
  public searchTerm: string = '';

  constructor(private repo: GifsRepository) {}

  ngOnInit(): void {
    this.repo.get().subscribe((data: Gif[]) => {
      this.gifs = data;
    });
  }

  public search() {
    this.repo.get(this.searchTerm).subscribe((data: Gif[]) => {
      this.gifs = data;
      this.gifsHistory.push(...this.gifs);
    });
  }
}
