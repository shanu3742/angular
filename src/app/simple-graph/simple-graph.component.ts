import { Component } from '@angular/core';
import * as d3 from 'd3';

interface Shape {
  data: [{
    x: number,
  }],
  status?: string
}

@Component({
  selector: 'app-simple-graph',
  templateUrl: './simple-graph.component.html',
  styleUrls: ['./simple-graph.component.css']
})
export class SimpleGraphComponent {


  private svg: any
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  createSvg() {
    console.log('hello')

    this.svg = d3.select("#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2)).style("stroke", 'red')
      .style("fill", "none")
      .style("stroke-width", '1px');


    // this.createRect()

    let dummyData = [
      {
        x: 300,
        y: 50
      },

      {
        x: 350,
        y: 50
      },
      {
        x: 350,
        y: 150
      },
      {
        x: 300,
        y: 150
      },






    ]



    this.drawShapeUsingLine(dummyData)
  }
  createRect() {
    this.svg.append('rect').attr('x', 100).attr('y', 102).attr('storke', 'green').attr('width', 40).attr('height', 20).attr('fill', 'orange')



    // this.createCircle()


  }

  createCircle() {
    let circle = this.svg.append('circle');
    circle.attr('cx', 250).attr('cy', 130).attr('r', 50).attr('storke', 'orange').attr('storke-width', 10).attr('fill', 'red')

    // circle.append('text').attr('x', 125).attr('y', 65).attr('text-anchor', 'center').text('circle')


  }

  generateColor(type: string): string {

    switch (type) {
      case 'success': return 'rgb(155, 199, 119)'



      case 'warrning': return '#ffaa71'



      default: return '#ff3333'

    }

  }
  generateLine(xCordinateOne: number, yCordinateOne: number, xCordinateTwo: number, yCordinateTwo: number, status?: string, lineColor?: string) {
    this.svg.append('line')
      .attr('x1', xCordinateOne)
      .attr('y1', yCordinateOne)
      .attr('x2', xCordinateTwo)
      .attr('stroke', status ? this.generateColor(status) : lineColor)
      .attr('y2', yCordinateTwo).attr('stroke-width', 1)
  }

  drawShapeUsingLine(data: any[], status?: string) {

    let R = Math.floor(Math.random() * 300);
    let G = Math.floor(Math.random() * 300);
    let B = Math.floor(Math.random() * 300);

    // data.forEach((element, index) => {

    let index = 0;
    let interval = setInterval(() => {
      if (index < data.length) {

        if (index === data.length - 1) {

          /**
           * pass all require cordinate point
           */

          this.generateLine(data[index].x, data[index].y, data[0].x, data[0].y, status, `rgb(${R}, ${G}, ${B})`)

        } else {
          this.generateLine(data[index].x, data[index].y, data[index + 1].x, data[index + 1].y, status, `rgb(${R}, ${G}, ${B})`)
        }
        index = index + 1
      } else {
        clearInterval(interval)
      }


    }, 500)

    // })

    //top line

  }

  ngOnInit(): void {
    this.createSvg();
    // this.drawBars(this.data);
  }

}
