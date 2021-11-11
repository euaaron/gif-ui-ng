import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../model/gif';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss'],
})
export class GifCardComponent implements OnInit {
  private isStatic: boolean = true;
  public imageUrl: string = '';

  @Input() gif!: Gif;

  ngOnInit(): void {
    this.imageUrl = this.gif.images.static;
  }

  toggleImage() {
    if (this.isStatic) {
      this.imageUrl = this.gif.images.static;
    } else {
      this.imageUrl = this.gif.images.compact;
    }
  }

  onHover() {
    this.isStatic = !this.isStatic;
    this.toggleImage();
  }
}
