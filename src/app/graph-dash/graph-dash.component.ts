import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-graph-dash',
  templateUrl: './graph-dash.component.html',
  styleUrls: ['./graph-dash.component.css']
})
export class GraphDashComponent {

  svg: any;

  generateLine(xCordinateOne: number, yCordinateOne: number, xCordinateTwo: number, yCordinateTwo: number) {

    this.svg.append('line')
      .attr('x1', xCordinateOne)
      .attr('y1', yCordinateOne)
      .attr('x2', xCordinateTwo)
      .attr('y2', yCordinateTwo)
      .attr('stroke', 'green')
  }

  generateCircle(xCordinate: number, yCordinate: number, value: number, color: string) {

    this.svg.append('circle')
      .attr('cx', xCordinate)
      .attr('cy', yCordinate)
      .attr('r', value)
      .attr('fill', color)

  }
  createSvg() {

    console.log('date template')

    //svg creation

    this.svg = d3.select('#dash').append('svg')
      .attr('width', 400)
      .attr('height', 400)




    //create rectangle inside div
    let rect = this.svg.append('rect')
      .attr('x', 10)
      .attr('y', 10)
      .attr('width', 200)
      .attr('height', 200)
      .attr('stroke', 'red')
      .attr('stroke-width', 2)
      .attr('fill', 'rgb(255, 218, 162)')



    // create line

    this.generateLine(10, 10, 110, 110)
    this.generateLine(210, 10, 110, 110)
    this.generateLine(110, 110, 210, 210)
    this.generateLine(10, 210, 110, 110)


    this.generateCircle(110, 110, 2, 'red')

    this.generateCircle(10, 10, 10, 'green')
    this.generateCircle(210, 10, 6, 'orange')
    this.generateCircle(210, 210, 4, 'rgb(146, 9, 9)')

    this.generateCircle(10, 210, 2, 'rgb(238, 123, 123)')


    this.svg.append('text')
      .attr('x', 5)
      .attr('y', 10)
      .text('success')
      .attr('fill', 'rgb(190, 224, 151)')
      .attr('font-size', 3)

    this.svg.append('text')
      .attr('x', 206)
      .attr('y', 10)
      .text('progress')
      .attr('fill', 'rgb(241, 210, 150)')
      .attr('font-size', 2)


    this.svg.append('text')
      .attr('x', 208)
      .attr('y', 210)
      .text('error')
      .attr('fill', 'red')
      .attr('font-size', 2)

    this.svg.append('text')
      .attr('x', 9)
      .attr('y', 210)
      .text('error')
      .attr('fill', 'red')
      .attr('font-size', 1)
  }



  //add circle







  ngOnInit(): void {

    this.createSvg()
  }

}
