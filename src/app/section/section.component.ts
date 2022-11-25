import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  onGeerting():string{
    return 'hello Agent'
  }
 source:string='../../assets/MightyStocklead1200.jpg'
}
