import { Component } from '@angular/core';
import * as d3 from 'd3'

@Component({
  selector: 'app-second-bar-chart',
  templateUrl: './second-bar-chart.component.html',
  styleUrls: ['./second-bar-chart.component.css']
})
export class SecondBarChartComponent {
  data = [10, 12, -6, 2, 1, -10, 2, 13, -4, 19, -1];
  referenceY = 10
  svg: any
  // sum=100
  pointY: number[] = []
  // caluclate() {

  //   let r: any

  //   for (let i = 0; i < this.data.length; i++) {
  //     r = this.data.slice(i, i + 1).reduce((a, b) => a - b)
  //     // let result: any = r.reduce((a: any, b: any) => a + b)

  //     console.log('calculated result', r)

  //     this.pointY.push(r)
  //   }
  //   // this.sum= this.sum







  // }




  createSvg() {
    // this.caluclate()
    this.svg = d3.select('#nifty').append('svg')
      .attr('width', 250)
      .attr('height', 250)

    // for (let i = 0; i < this.data.length; i++) {

    //   this.svg.append('line')
    //     .attr('x1', i * 10)
    //     .attr('x2', (i + 1) * 10)
    //     .attr('y1', 150)
    //     .attr('y2', 150)
    //     .attr('stroke', 'green')
    // }

    for (let i = 0; i < this.data.length; i++) {

      this.svg.append('rect')
        .attr('x', i * 6)
        .attr('y', this.data[i] > 0 ? 150 - this.data[i] : 150)
        .attr('height', Math.abs(this.data[i]))
        .attr('width', 5)
        .attr('stroke', this.data[i] > 0 ? 'none' : 'none')
        .attr('fill', this.data[i] > 0 ? 'rgb(89, 241, 89)' : 'rgb(228, 94, 94)')
        .attr('stroke-width', 0.5)

    }

    for (let i = 0; i < this.data.length; i++) {

      this.svg.append('text')
        .attr('x', (i * 6) + (1))
        .attr('y', this.data[i] > 0 ? 152 : 149)
        .text(this.data[i]).attr('font-size', 2)

    }


    /**
     * line
     */


    for (let i = 0; i < this.data.length; i++) {
      console.log('point y', this.pointY)
      this.svg.append('line')
        .attr('x1', i * 6)
        .attr('x2', (i + 1) * 6)
        .attr('y1', this.pointY[i])
        .attr('y2', this.pointY[i + 1])
        .attr('stroke', 'green')
    }

  }


  ngOnInit(): void {
    this.createSvg();
    // this.drawBars(this.data);
  }

}
