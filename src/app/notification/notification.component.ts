import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div  [hidden]="showNotification">image footer</div>`,
  styles: [`div{color:red}`]
})
export class NotificationComponent {
  showNotification:boolean=false;

}
