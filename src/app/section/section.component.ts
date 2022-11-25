import { Component } from '@angular/core';
import { Product } from '../search/hero';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  hide: boolean = false

  onGeerting(): string {
    return 'hello Agent'
  }
  onHideImage(): void {
    setTimeout(() => {
      this.hide = true
    }, 500)
  }
  source: string = '../../assets/MightyStocklead1200.jpg'
  navigationData: string[] = ['Controllee input', 'Directive']

  itemnumber: number = 0;

  onButtonPressed(index: number): void {
    this.itemnumber = index + 1
  }

  products: Product[] = [
    {
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      name: "CHECK PRINT SHIRT",
      price: 110,
      protectId: 0,
    },
    {
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "GLORIA HIGH LOGO SNEAKER",
      price: 91,
      protectId: 1
    },
    {
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "CATE RIGID BAG",
      price: 94.5,
      protectId: 2
    },
    {
      imgUrl: "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      name: "GUESS CONNECT WATCH",
      price: 438.9,
      protectId: 3
    },
    {
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "'70s RETRO GLAM KEFIAH",
      price: 20,
      protectId: 4
    }
  ]

}
