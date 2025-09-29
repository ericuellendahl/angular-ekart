import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  searchText: string = '';

  setSearchText(text: string) {
    this.searchText = text;
  }
}
