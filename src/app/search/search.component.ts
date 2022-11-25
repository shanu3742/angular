import { Component } from '@angular/core';
import { hero } from './hero';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  hide: boolean = false
  searchValue: string = ''
  heroes
    : hero[] = [{ id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }]

  onInputUpdate(event: Event) {



    console.log((<HTMLInputElement>event.target).value)
    this.searchValue = (<HTMLInputElement>event.target).value


    // let filterData = this.data.filter((el) => el.includes(this.searchValue));

    // this.data = filterData

  }

  onHide() {
    this.hide = true
  }

  onView() {
    this.hide = false;
    console.log('string update')

  }

}
