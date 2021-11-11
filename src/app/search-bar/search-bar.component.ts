import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() searchTermChange = new EventEmitter<string>();

  @Input()
  public searchTerm: string = '';

  onChange(value: string) {
    this.searchTermChange.emit(value);
  }
}
