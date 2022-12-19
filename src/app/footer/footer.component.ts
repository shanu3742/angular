import { Component } from '@angular/core';
import * as d3 from 'd3'


export interface Course {
  type: 'FREE' | 'PAID' | 'UNPAID',
  name: string,
  startAt: string,
  endAt: string,
  duriation: string,
  avaliablity: 'Avaliable' | 'NotAvaliable'
  img: string


}

export interface Margin {
  TOP: number,
  BOTTOM: number,
  LEFT: number,
  RIGHT: number
}
export interface Data {
  year: string,
  value: number
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

  cal: number = 0



  onDecrement() {
    this.cal = this.cal - 1
  }
  onCounter() {
    return this.cal
  }

  data: Data[] = [
    {
      year: '1990',
      value: 20
    },
    {
      year: '1995',
      value: 10
    },
    {
      year: '2000',
      value: 21
    },
    {
      year: '2005',
      value: 25
    },
    {
      year: '2010',
      value: -15
    },

    {
      year: '2015',
      value: 27
    },
    {
      year: '2020',
      value: 21
    },
    {
      year: '2025',
      value: 11
    },
    {
      year: '2030',
      value: 85
    },

    {
      year: '2035',
      value: 33
    }
  ]
  // index: number = this.overAlldata.length / 3
  // data: Data[] = this.overAlldata.slice(0, this.index)

  private svg: any
  private g: any
  private width: number = 600
  private height: number = 300
  private margin: Margin = {
    TOP: 20,
    BOTTOM: 20,
    RIGHT: 30,
    LEFT: 30
  }
  private scaleX: any
  private scaleY: any

  intervalTime = 10

  colorScale = d3.scaleOrdinal(this.data.map((el) => el.year)).range(d3.schemeCategory10)

  createYScale() {


    //create scale band
    const DOMAIN: [number, number] = [Math.max(...this.data.map((el) => el.value)), Math.min(...this.data.map((el) => el.value))]

    this.scaleY = d3.scaleLinear().domain(DOMAIN).range([0, this.height])

    //axis type

    let axisLeft = d3.axisLeft(this.scaleY)

    /**
     * create axis
     */

    this.g.append('g').attr('class', 'y-axis').call(axisLeft)
  }

  createXScale() {

    //create x-scale
    this.scaleX = d3.scaleBand().domain(this.data.map((el) => el.year)).range([0, this.width]).paddingInner(0.1).paddingOuter(0.2)

    //axis type
    let axisBottom = d3.axisBottom(this.scaleX).tickSize(10)





    console.log('axisBottom', axisBottom)

    //create x-axis
    this.g.append('g').attr('transform', `translate(${0},${this.scaleY(0)})`).attr('class', 'x-axis').call(axisBottom)


    d3.select('.x-axis').selectAll('.tick').select('line').attr('y2', (d, i) => {
      console.log(d, i)

      if (this.data[i].value < 0) {
        return -10
      } else {
        return 10
      }

    })


    d3.select('.x-axis').selectAll('.tick').select('text').attr('y', (d, i) => {
      console.log(d, i)

      if (this.data[i].value < 0) {
        return -18
      } else {
        return 18
      }

    })

    /**
     * remove all the axis domain
     */

    d3.selectAll('.domain').remove()

    /**
     * remove tick along y-axis
     */

    d3.select('.y-axis').selectAll('.tick').remove()
  }

  stringToColour = function (str: string) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }


  hexToRgbA(str: string, opacity: number) {
    let hex = this.stringToColour(str)
    var c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + `,${opacity})`;
    }
    throw new Error('Bad Hex');
  }

  createRect() {
    // console.log('converted color', this.stringToColour('shanu'))



    /**
     * set rect intervalTime
     */

    let actualIntrvalTime = this.intervalTime * 1000 / this.data.length

    let rectIndex = 0;


    let rect = this.g.append('g').selectAll('rect').data(this.data).enter().append('rect')
      .attr('x', (d: Data, i: number) => this.scaleX(d.year))
      .attr('y', (d: Data, i: number) => d.value > 0 ? this.scaleY(d.value) : this.scaleY(0))
      .attr('height', (d: Data, i: number) => d.value > 0 ? this.scaleY(0) - this.scaleY(d.value) : this.scaleY(d.value) - this.scaleY(0))
      .attr('stroke', (d: Data, i: number) => this.hexToRgbA(`${d.year}${d.value}`, 1))
      .attr('width', this.scaleX.bandwidth())
      .attr('fill', (d: Data, i: number) => this.hexToRgbA(`${d.year}${d.value}`, 0.5))

    // let x = setInterval(() => {
    //   console.log(`hello interval`)
    //   if (rectIndex < this.data.length) {
    //     rect.attr('fill', (d: Data, i: number) => rectIndex === i ? 'red' : this.hexToRgbA(`${d.year}${d.value}`, 0.5))
    //     rectIndex = rectIndex + 1
    //   } else {
    //     rect.remove()
    //     this.createRect()
    //     rectIndex = 0
    //     clearInterval(x)
    //   }
    // }, actualIntrvalTime)

    // console.log('index after update', rectIndex)



  }


  createLine() {

    //generate linear gridient

    //   <defs>
    //   <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
    //     <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
    //     <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    //   </linearGradient>
    // </defs>


    /**
     * select random color
     */

    let randomIndex = Math.floor(Math.random() * this.data.length)
    let gragdient = this.svg.append('defs').append('linearGradient').attr('id', 'grad1').attr('x1', '0%').attr('x2', '100%').attr('y1', '0%').attr('y2', '0%')
    gragdient.append('stop').attr('offset', '0%').style('stop-color', `${this.hexToRgbA(`${this.data[randomIndex].year}${this.data[randomIndex].year}`, 1)}`).style('stop-opacity', '1')
    gragdient.append('stop').attr('offset', '100%').style('stop-color', `${this.hexToRgbA(`${this.data[randomIndex + 1].year}${this.data[randomIndex + 1].year}`, 1)}`).style('stop-opacity', '1')
    // Add the line
    this.g.append("path").datum(this.data)
      .attr("fill", "none")


      .attr("stroke", "url(#grad1)")
      .attr('id', 'curveLine')
      .attr("stroke-width", 1.5)
      .attr("d", d3.line().x((d: any) => {
        console.log('d in x', d.year)

        if (d.year === this.data[0].year) {
          return this.scaleX(d.year)
        } else {
          return this.scaleX(d.year) + 26
        }

      })
        .y((d: any) => {
          console.log(d)
          return this.scaleY(d.value)
        })
      )
    // .curve(d3.curveBasis)

    let path: any = document.getElementById('curveLine')

    let pathString = path.attributes.d.value

    console.log(pathString)
    //   <circle r="5" fill="red">
    //   <animateMotion
    //     dur="10s"
    //     repeatCount="indefinite"
    //     path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
    // </circle>




    this.g.append('circle').attr('r', 5).attr('fill', 'red').append('animateMotion').attr('dur', `${this.intervalTime}s`).attr('repeatCount', "indefinite").attr('path', pathString).on('onscroll', () => console.log('amimation circle'))
  }

  createSvg() {
    d3.select('#snake').select('svg').remove()
    this.svg = d3.select('#snake').append('svg')
      .attr('width', this.width + this.margin.LEFT + this.margin.RIGHT)
      .attr('height', this.height + this.margin.TOP + this.margin.BOTTOM)
      .attr('style', 'background:rgb(236, 236, 236)')

    this.g = this.svg.append('g').attr('transform', `translate(${this.margin.LEFT},${this.margin.TOP})`)
    this.createYScale()
    this.createXScale()

    this.createRect()
    this.createLine()

  }



  ngOnInit() {

    // let int = setInterval(() => {
    //   if (this.data.length !== this.overAlldata.length) {
    //     this.index = this.index + (this.overAlldata.length / 3)
    //     this.data = this.overAlldata.slice(0, this.index)
    this.createSvg()
    //   } else {
    //     clearInterval(int)
    //   }

    // }, 1000)

    this.courseItem = this.courses
  }

}
