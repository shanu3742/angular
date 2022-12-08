import { Component } from '@angular/core';
import { Emp } from '../student-graph/student-graph.component';
import * as d3 from 'd3'
import { tick } from '@angular/core/testing';
import { area } from 'd3';

interface Margin {
  TOP: number,
  LEFT: number,
  RIGHT: number,
  BOTTOM: number
}
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {

  grade = [
    {
      gradeType: 'A+',
      value: 20
    },
    {
      gradeType: 'A',
      value: 30
    },
    {
      gradeType: 'B+',
      value: 50
    },
    {
      gradeType: 'B',
      value: 13
    },
    {
      gradeType: 'C',
      value: 26
    },
    {
      gradeType: 'F',
      value: 25
    }
  ]

  svg: any;
  toolTip: any
  private width: number = 250;
  private height: number = 150;
  private margin: Margin = { TOP: 70, LEFT: 100, BOTTOM: 10, RIGHT: 5 }
  pieValue = this.grade.map((e) => e.value)
  pieCategories = this.grade.map((e) => e.gradeType)
  max = Math.max(...this.pieValue);
  min = Math.min(...this.pieValue)
  public indicator: number = this.min
  colorScale = d3.scaleOrdinal().domain(this.pieCategories).range(d3.schemeCategory10)


  /**
   *
   * @param animation
   */

  interval = 0;


  x = setInterval(() => {

    if (this.interval < 1) {
      this.indicator = this.max

      this.interval = this.interval + 1

      this.createSvg()
    } else {
      clearInterval(this.x)
    }

  }, 500)




  hashCode(str: string) {
    let hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }
  colorGenerator = (i: any, opacity: string) => {
    console.log(this.colorScale(i))

    let rgbaColor = this.hexToRgbA(this.colorScale(i))

    console.log(rgbaColor)
    let color: any = rgbaColor.split(')')
    let colorResult = color[0].split(',')

    colorResult[colorResult.length - 1] = opacity
    console.log(colorResult)

    let updatedColor = colorResult.join(',')
    console.log(updatedColor)

    let colorOutput = `${updatedColor})`

    console.log(colorOutput)
    return colorOutput
  }

  pickColor(str: string = 'color code', colorvalue: number = 100) {
    // let color = `hsl(${hashCode(str) % 360}, 100%, 90%)`;
    // console.log(color);
    return `hsl(${this.hashCode(str) % 360}, 100%, ${colorvalue}%)`;
  }
  hexToRgbA(hex: any) {
    var c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
    }
    throw new Error('Bad Hex');
  }


  changeLegend(index: number | string) {
    console.log(index)
    if (typeof index === 'string') {
      let indexOfItem = this.pieCategories.indexOf(index)
      this.indicator = this.pieValue[indexOfItem];
    } else {
      console.log('indexitem', index)

      this.indicator = index;
    }
    this.createSvg()
  }



  createSvg() {
    d3.select('#pie').select('svg').remove()
    this.svg = d3.select('#pie').append('svg')
      .attr('width', this.width + this.margin.LEFT + this.margin.RIGHT)
      .attr('height', this.height + this.margin.TOP + this.margin.BOTTOM)




    /**
     * create data
     */



    /**
     * use to create start angle and
     * end angle
     */
    var pie: any = d3.pie()(this.pieValue)

    // console.log('pie', pie)
    /**
     * create segment
     * innerRadius should be zero
     * outerRadius should be number
     *
     */



    console.log(this.colorScale)
    let segment = d3.arc()
      .innerRadius(0)
      .outerRadius(50)
      .padAngle(0.15)
      .padRadius(5)
      .cornerRadius(2)


    /**
     * anmiation
     */


    let virtualPie = this.svg.append('g')
      .attr('transform', `translate(${(this.width + this.margin.LEFT) / 2},${(this.height + this.margin.TOP) / 2})`)
      .selectAll('path')
      .data(pie)
      .enter()


    console.log(virtualPie)

    virtualPie.append('g').attr('transform', (d: any, i: any) => {


      console.log(d.data)
      if (d.data === this.indicator) {
        let centeriodOfPie = segment.centroid(pie[i])

        console.log(centeriodOfPie)
        return `translate(${centeriodOfPie[0]},${centeriodOfPie[1]})`
      }
      return `translate(0,0)`
    }).append('path')
      .attr('d', segment)
      .attr('fill', (d: any, i: any) => this.colorGenerator(i, '0.3'))
      .attr('stroke', (d: any, i: any) => d.data === this.indicator ? 'black' : 'none')
      .attr('stroke-width', (d: any, i: any) => d.data === this.indicator ? 0.5 : 0)
      .attr('style', 'cursor:pointer')
      .on('mouseenter', (d: any, i: any) => {
        console.log(i)
        let pieIndex: any = this.pieValue.indexOf(i.data)
        this.toolTip = this.svg.select('g').append('g').attr('transform', `translate(${0 - 50},${0 - 50 - 12})`)
        this.toolTip.append('rect').attr('width', 100).attr('height', 10).attr('stroke', this.colorScale(pieIndex)).attr('fill', () => {

          console.log(this.colorScale(pieIndex))

          let rgbaColor = this.hexToRgbA(this.colorScale(pieIndex))

          console.log(rgbaColor)
          let color: any = rgbaColor.split(')')
          let colorResult = color[0].split(',')

          colorResult[colorResult.length - 1] = '0.2'
          console.log(colorResult)

          let updatedColor = colorResult.join(',')
          console.log(updatedColor)

          let colorOutput = `${updatedColor})`

          console.log(colorOutput)
          return colorOutput
        })
        this.toolTip.append('circle').attr('r', 5).attr('stroke', () => {

          console.log(this.colorScale(pieIndex))

          let rgbaColor = this.hexToRgbA(this.colorScale(pieIndex))

          console.log(rgbaColor)
          let color: any = rgbaColor.split(')')
          let colorResult = color[0].split(',')

          colorResult[colorResult.length - 1] = '0.9'
          console.log(colorResult)

          let updatedColor = colorResult.join(',')
          console.log(updatedColor)

          let colorOutput = `${updatedColor})`

          console.log(colorOutput)
          return colorOutput
        }).attr('cy', 5).attr('fill', () => {

          console.log(this.colorScale(pieIndex))

          let rgbaColor = this.hexToRgbA(this.colorScale(pieIndex))

          console.log(rgbaColor)
          let color: any = rgbaColor.split(')')
          let colorResult = color[0].split(',')

          colorResult[colorResult.length - 1] = '0.9'
          console.log(colorResult)

          let updatedColor = colorResult.join(',')
          console.log(updatedColor)

          let colorOutput = `${updatedColor})`

          console.log(colorOutput)
          return colorOutput
        })

        this.toolTip.append('text').text(`${i.data}`).attr('stroke', this.colorScale(pieIndex)).attr('x', 50 - 10).attr('y', 8).attr('font-size', 8)
      }

      )
      .on('mouseleave', (d: any, i: number) => this.toolTip.remove())
      .on('click', (d: any, i: any) => this.changeLegend(i.data))



    /**
     * adding legend to pie chart
     */

    let legend = this.svg.append('g')
      .attr('transform', `translate(${(this.width + this.margin.LEFT) / 2 - 25},${((this.height + this.margin.TOP) / 2) + 70})`).selectAll('.legends').data(this.pieCategories)

    // legend.append('g')
    legend.enter().append('g').classed('legends', true).append('circle').attr('r', 4).attr('fill', (d: any, i: any) => this.colorGenerator(i, '0.3')).attr('cx', (d: any, i: any) => i * 10).attr('style', 'cursor:pointer')
      .attr('stroke', (d: any, i: any) => this.pieValue[i] === this.indicator ? 'black' : 'none')
      .attr('stroke-width', (d: any, i: any) => this.pieValue[i] === this.indicator ? 0.5 : 0)
      .on('click', (d: any, i: any) => this.changeLegend(i))
      .on('mouseenter', (d: any, i: any) => {

        let pieIndex: any = this.pieCategories.indexOf(i)
        this.toolTip = this.svg.select('g').append('g').attr('transform', `translate(${0 - 50},${0 - 50 - 12})`)
        this.toolTip.append('rect').attr('width', 100).attr('height', 10).attr('stroke', this.colorScale(pieIndex)).attr('fill', this.colorGenerator(pieIndex, '0.2'))
        this.toolTip.append('circle').attr('r', 5).attr('stroke', this.colorGenerator(pieIndex, '0.9')).attr('cy', 5).attr('fill', this.colorGenerator(pieIndex, '0.9'))

        this.toolTip.append('text').text(`${this.pieValue[pieIndex]}`).attr('stroke', this.colorScale(pieIndex)).attr('x', 50 - 10).attr('y', 8).attr('font-size', 8)
      }

      )
      .on('mouseleave', (d: any, i: number) => this.toolTip.remove())


    // console.log('indicator', this.indicator)
    legend.enter().append('text').text((d: any, i: any) => d).attr('x', (d: any, i: any) => (i * 10) - 1).classed('legend-text', true).attr('font-size', 5).attr('y', -5)




  }

  /**
   * pie chart
   */



  ngOnInit() {
    this.createSvg()
  }

}
