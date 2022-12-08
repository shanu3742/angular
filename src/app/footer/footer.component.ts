import { Component } from '@angular/core';


export interface Course {
  type: 'FREE' | 'PAID' | 'UNPAID',
  name: string,
  startAt: string,
  endAt: string,
  duriation: string,
  avaliablity: 'Avaliable' | 'NotAvaliable'
  img: string


}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent {

  courses: Course[] = [
    {
      type: 'FREE',
      name: 'React',
      startAt: '20/11/2022',
      endAt: '10/06/2023',
      duriation: '7 month',
      avaliablity: 'Avaliable',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'

    },
    {
      type: 'PAID',
      name: 'Angular',
      startAt: '20/10/2022',
      endAt: '10/07/2023',
      duriation: '9 month',
      avaliablity: 'NotAvaliable',
      img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/angular_logo_icon_169595.png'

    },
    {
      type: 'UNPAID',
      name: 'Next.js',
      startAt: '29/11/2022',
      endAt: '10/04/2023',
      duriation: '4 month',
      avaliablity: 'Avaliable',
      img: 'https://cdn.icon-icons.com/icons2/3392/PNG/512/nextjs_icon_213852.png'

    },
    {
      type: 'FREE',
      name: 'Node.js',
      startAt: '20/06/2022',
      endAt: '10/06/2023',
      duriation: '12 month',
      avaliablity: 'NotAvaliable',
      img: 'https://cdn-icons-png.flaticon.com/512/919/919825.png'

    },
    {
      type: 'FREE',
      name: 'javascript',
      startAt: '20/06/2021',
      endAt: '10/06/2023',
      duriation: '24 month',
      avaliablity: 'NotAvaliable',
      img: 'https://www.shutterstock.com/image-illustration/stylized-3d-javascript-icon-side-600w-2175814909.jpg'

    },
    {
      type: 'UNPAID',
      name: 'D3.js',
      startAt: '20/06/2022',
      endAt: '10/06/2023',
      duriation: '12 month',
      avaliablity: 'NotAvaliable',
      img: 'https://avatars.githubusercontent.com/u/1562726?s=280&v=4'

    },
    {
      type: 'PAID',
      name: 'Python',
      startAt: '20/06/2021',
      endAt: '10/06/2023',
      duriation: '24 month',
      avaliablity: 'Avaliable',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrsD61F6OIVxSvORk6Bj7a9LtjLJxGGd-6w&usqp=CAU'

    },
  ]

  courseItem: any

  onPaid() {
    return this.courses.filter((el) => el.type === 'PAID').length
  }
  onUnPaid() {
    return this.courses.filter((el) => el.type === 'UNPAID').length
  }
  onFree() {
    return this.courses.filter((el) => el.type === 'FREE').length
  }
  getTotalAvaliableItem() {
    return this.courses.filter((el) => el.avaliablity === 'Avaliable').length
  }
  getNotTotalAvaliableItem() {
    return this.courses.filter((el) => el.avaliablity === 'NotAvaliable').length
  }
  onBuy(type: string) {

    if (type === 'Avaliable') {
      this.onAvaliablity()
    } else {
      this.onNotify()
    }

  }
  onAvaliablity() {
    console.log('avaliable')
  }

  onNotify() {
    console.log('notify me')
  }

  onFilter(value: string) {
    console.log(value)




    if (value === 'all') {
      this.courseItem = this.courses
    } else {
      let typeofCheckBox: any = {
        FREE: 'type',
        UNPAID: 'type',
        PAID: 'type',
        NotAvaliable: 'avaliablity',
        Avaliable: 'avaliablity'

      }
      let key = typeofCheckBox[value]


      console.log(key)
      this.courseItem = this.courses.filter((el: any) => el[key] === value)
      // console.log(`filter value${value}`)
      // console.log(`filter value${value}`)
    }

  }
  searchedValue: string = ''
  onCourseSearch(value: any) {
    console.log(`search value ${value}`)
    this.courseItem = this.courseItem.filter((el: any) => el.name.toLowerCase().includes(value.toLowerCase()))

    this.searchedValue = value
  }

  ngOnInit() {
    this.courseItem = this.courses
  }

}
