import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  seacherTextCahnge : EventEmitter<string> = new EventEmitter<string>();

  onsearchTextChange() {
    this.seacherTextCahnge.emit(this.searchText);
  }

  setSearchText(text: string) {
    this.searchText = text;
  }

  // updateSearchText(event: any) {
  //   this.searchText = event.target.value;
  // }
}
