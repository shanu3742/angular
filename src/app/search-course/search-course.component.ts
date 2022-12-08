import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {

  constructor() { }


  searchValue = ''


  @Output() onFormSubmit: EventEmitter<string> = new EventEmitter<string>





  onSearch() {



    this.onFormSubmit.emit(this.searchValue)



  }


}
