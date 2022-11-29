import { Component } from '@angular/core';
import * as d3 from 'd3'
import { text } from 'd3';



interface Data {
  year: number,
  value: number
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  svg: any;
  data: Data[] = [{
    year: 1990,
    value: 10
  },
  {
    year: 2000,
    value: 15
  },
  {
    year: 2010,
    value: 30
  },
  {
    year: 2020,
    value: 20
  },
  {
    year: 2030,
    value: 11
  },
  {
    year: 2040,
    value: 19
  },

  {
    year: 2050,
    value: 50
  }
  ]
  value = this.data.map((el) => el.value)
  threshold = (this.value.reduce((a, b) => a + b)) / this.value.length




  //  okay.map((el,i) => math.min(el) )
  min = Math.min(...this.value)
  max = Math.max(...this.value)

  median = (this.min + this.max) / this.value.length


  createSvg() {

    console.log(`median:${this.median}`)
    this.svg = d3.select('#simple-bar').append('svg')
      .attr('width', 400)
      .attr('height', 400)


    /**
     * bar chart
     */

    this.svg.selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', (d: Data, i: number) => {

        return (i * 15) + 10

      })
      .attr("y", (d: Data, i: number) => {
        return 0
      })
      .attr('width', 10)
      .attr('height', (d: Data, i: number) => {
        return d.value
      })
      .attr('stroke', (d: Data, i: number) => {
        return 'green'
      })
      .attr('fill', (d: Data, i: number) => {
        return 'rgb(164, 224, 164)'
      })


    // this.svg.selectAll('line')
    //   .data(this.data)
    //   .enter()
    //   .append('line')
    //   .attr('x1', 0)
    //   .attr('y1', (d: Data, i: number) => {
    //     return i * this.median
    //   })
    //   .attr('x2', 0)
    //   .attr('y2', (d: Data, i: number) => {
    //     return (i + 1) * this.median
    //   })
    //   .attr('stroke', "orange")
    //   .attr('stroke-width', 2)


    //generate y axis
    for (let i = 0; i < this.value.length; i++) {
      this.svg.append('line')
        .attr('x1', 10)
        .attr('y1', i * this.median)
        .attr('x2', 10)
        .attr('y2', (i + 1) * this.median)
        .attr('stroke', 'green')
        .attr('stroke-width', 1)
    }
    //generate tick
    for (let i = 0; i < this.value.length; i++) {
      if (i === 0) {
        continue;
      } else {
        this.svg.append('rect')
          .attr('x', 8)
          .attr('y', i * this.median)
          .attr('width', 2)
          .attr('height', 0.01)
          .attr('fill', 'rgb(182, 229, 182')
          .attr('stroke', 'green')
      }
    }
    //generate text
    for (let i = 0; i < this.value.length; i++) {
      if (i === 0) {
        continue;
      } else {
        this.svg.append('text')
          .attr('x', 2)
          .attr('y', i * this.median)
          .text(`${(i * this.median).toFixed(2)}`)
          .attr('font-size', 3)
          .attr('fill', 'rgb(164, 224, 164)')
      }
    }


    /**
     * find threshold line
     *
     */


    this.svg.append('line')
      .attr('x1', 10)
      .attr('y1', this.threshold)
      .attr('x2', ((this.value.length + 1) * 15) + 10)
      .attr('y2', this.threshold)
      .attr('stroke', 'red')
      .attr('stroke-width', 1)
      .style('stroke-dasharray', ("3"))





    /**
     * add circle at top with value
     */

    for (let i = 0; i < this.value.length; i++) {
      this.svg.append('circle')
        .attr('cx', (i * 15) + 10 + (10 / 2))
        .attr('cy', this.data[i].value + 4)
        .attr('r', 4)
        .attr('fill', this.value[i] > this.threshold ? 'rgb(164, 224, 164)' : 'rgb(241, 157, 157)')
        .attr('stroke', this.value[i] > this.threshold ? 'green' : 'red')
    }

    /**
     * add value to circle
     */
    for (let i = 0; i < this.value.length; i++) {

      this.svg.append('text')
        .attr('x', (i * 15) + 10 + (10 / 3))
        .attr('y', this.data[i].value + 5.5)
        .text(`${this.value[i]}`)
        .attr('font-size', 3)
        .attr('fill', this.value[i] > this.threshold ? 'green' : 'red')
        .attr('font-weight', 700)

    }

    /**
     * add threshold text
     */

    this.svg.append('text')


      .attr('x', ((this.value.length + 1) * 15) + 10)
      .attr('y', this.threshold)
      .text(`threshold:${this.threshold.toFixed(2)}`)
      .attr('fill', 'red')
      .attr('font-size', 4)
      .attr('font-weight', 700)



    for (let i = 0; i < this.value.length; i++) {

      this.svg.append('rect')
        .attr('x',

          (i * 15) + 10

        )
        .attr("y", (d: Data, i: number) => {
          return 0
        })
        .attr('width', 10)
        .attr('height',
          this.threshold > this.value[i] ? this.value[i] : this.threshold
        )
        .attr('stroke', 'none')
        .attr('fill',
          'rgb(241, 157, 157)'
        )
        .attr('class', 'bottom')


    }

    /**
    * create x axis
    * using line
    */
    for (let i = 0; i < this.value.length; i++) {
      this.svg
        .append('line')
        .attr('x1',
          (i * 15) + 10
        )
        .attr('y1', 0)
        .attr('x2',
          (((i + 1) * 15) + 10)
        )
        .attr('stroke', 'green')
        .attr('stroke-width', 2)
    }



    /**
     * add text at x-axis
     */

    for (let i = 0; i < this.value.length; i++) {
      this.svg.append('text')
        .attr('x', (i * 15) + 10 + (10 / 4))
        .attr('y', 4)
        .text(`${this.data[i].year}`)
        .attr('font-size', 3)
        .attr('fill', 'black')
    }


  }


  /**
   * overlap rect based on data
   */






  /**
   * create y-axis
   * usine line svg
   */





  ngOnInit(): void {

    this.createSvg()
  }

}
