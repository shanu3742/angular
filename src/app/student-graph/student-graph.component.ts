import { Component } from '@angular/core';
import * as d3 from 'd3'

interface Emp {

  name: string,
  gender: 'male' | 'female',
  height: string,
  shoe: string,
  favoriteColor: string,
  age: number

}
@Component({
  selector: 'app-student-graph',
  templateUrl: './student-graph.component.html',
  styleUrls: ['./student-graph.component.css']
})


export class StudentGraphComponent {

  empDetails: Emp[] = [
    {
      name: 'shanu',
      gender: "male",
      height: '120',
      shoe: '11',
      favoriteColor: 'red',
      age: 20
    },
    {
      name: 'bhanu',
      gender: "male",
      height: '120',
      shoe: '10',
      favoriteColor: 'green',
      age: 24
    },
    {
      name: 'kumar',
      gender: "male",
      height: '140',
      shoe: '15',
      favoriteColor: 'orange',
      age: 29
    },
    {
      name: 'sonu',
      gender: "female",
      height: '130',
      shoe: '14',
      favoriteColor: 'red',
      age: 21
    },
    {
      name: 'rahul',
      gender: "male",
      height: '130',
      shoe: '14',
      favoriteColor: 'red',
      age: 40
    }
  ]

  svg: any;
  private margin = { top: 15, left: 40, right: 10, bottom: 25 }
  private width: number = 150 - this.margin.left - this.margin.right;
  private height: number = 150 - this.margin.bottom - this.margin.top;

  createSvg() {
    this.svg = d3.select('#student-graph').append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.bottom + this.margin.top)

    /**
     * create reactangle
     */


    /**
     * scale y
     */




    let scaleY = d3.scaleLinear().domain([40, 0]).range([0, this.height])



    /**
     * scale x
     */

    let scaleX = d3.scaleBand().domain(this.empDetails.map((e) => e.name)).range([0, this.width])
      .paddingInner(0.1)
      .paddingOuter(0.1)
    /**
     * group the svg
     */

    let g = this.svg.append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`)


    /**
     * y-axis
     */

    /**
     * x-axis
     */

    /**
     * add text to y axis
     */


    this.svg.append('text').attr('x', 0).attr('y', (this.height + this.margin.top + this.margin.bottom) / 2).text('age').attr('transform', 'rotateX(45deg)')
    let bottomAxis = d3.axisBottom(scaleX)
    g.append('g').attr('transform', `translate(${0},${this.height})`).call(bottomAxis)
    let leftAxis = d3.axisLeft(scaleY).ticks(4);
    g.append('g').attr('class', 'y-axis').call(leftAxis)
    g.selectAll('#rect').data(this.empDetails).enter().append('rect')
      .attr('x', (d: Emp, i: number) => scaleX(d.name))
      .attr('y', (d: Emp, i: number) => scaleY(d.age))
      .attr('width', scaleX.bandwidth())
      .attr('height', (d: Emp, i: number) => this.height - scaleY(d.age))
      .attr('fill', (d: Emp, i: number) => d.favoriteColor)
    console.log('school details')
  }

  ngOnInit() {
    this.createSvg()
  }

}
