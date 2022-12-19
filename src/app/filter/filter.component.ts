import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() paid: number = 0
  @Input() unpaid: number = 0
  @Input() free: number = 0
  @Input() avaliable: number = 0
  @Input() notAvaliable: number = 0
  @Input() count: number = 0

  selectedBox: string = 'all'


  /**
   * create  custom event
   */

  @Output() onRaidioButtonChange: EventEmitter<string> = new EventEmitter<string>

  onRadioClicked() {
    this.onRaidioButtonChange.emit(this.selectedBox)

    console.log(this.selectedBox)
  }


  /**
   *render first time
   *and whenever input update
   *
   */


  ngOnChanges(changes: any) {
    console.log('run on input updated', changes)
    console.log(typeof this.ngOnChanges)
  }

  /**
   * render first  time
   */
  ngOnInit() {
    console.log('run once')
  }


}
