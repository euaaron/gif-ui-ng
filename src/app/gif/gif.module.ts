import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GifCardComponent } from './gif-card/gif-card.component';

@NgModule({
  declarations: [
    GifCardComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    GifCardComponent
  ]
})
export class GifModule { }
