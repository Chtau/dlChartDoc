import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule, MatInputModule, MatSelectModule, MatCheckboxModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DlLegendModule, Value, IChartItem, ChartOrientation, DlLineChartModule, Point, Line } from 'dl-chart';
import { DocDetailModule } from '../../shared/docdetail';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.html',
  styleUrls: ['./linechart.scss']
})
export class LineChart implements OnInit {

  selectedOrientation: ChartOrientation = ChartOrientation.Bottom;
  barOffset: number = 13;
  scaleSteps: number = 10;
  leftScaleAxis: boolean = true;
  rightScaleAxis: boolean = false;
  hideSelectLine: boolean = false;
  hideRaster: boolean = false;
  hideLines: boolean = false;
  hidePoints: boolean = false;

  hideChartHoverEffect: boolean = false;
  hideChartSelectEffect: boolean = false;

  lines: Line[] = [
    {
      color: 'red',
      cssClass: null,
      data: null,
      name: 'Red',
      tooltipConfig: null,
      points: [
        new Point(2017, 10),
        new Point(2018, 15),
        new Point(2019, 7),
        new Point(2020, 12),
      ]
    },
    {
      color: 'blue',
      cssClass: null,
      data: null,
      name: 'Blue',
      tooltipConfig: null,
      points: [
        new Point(2017, 5),
        new Point(2018, 9),
        new Point(2019, 22),
        new Point(2020, 1),
      ]
    },
    {
      color: 'green',
      cssClass: null,
      data: null,
      name: 'Green',
      tooltipConfig: null,
      points: [
        new Point(2017, 1),
        new Point(2019, 12),
        new Point(2020, 15),
      ]
    },
    {
      color: 'orange',
      cssClass: null,
      data: null,
      name: 'Orange',
      tooltipConfig: null,
      points: [
        new Point(2017, -6),
        new Point(2018, 0),
        new Point(2019, 11),
        new Point(2020, 16),
      ]
    }
  ]

  filterValue: string = null;

  get filterValues(): Line[] {
    if (this.filterValue === null || this.filterValue === '') {
      return this.lines;
    }
    return this.lines.filter(val => {
      if (val.name.toLowerCase().endsWith(this.filterValue.toLowerCase()) 
      || val.name.toLowerCase().startsWith(this.filterValue.toLowerCase())) {
        return true;
      }
      return false;
    });
  }

  objectSelect: IChartItem = null;
  objectHover: IChartItem = null;

  constructor() {}

  ngOnInit(): void {
    
  }

  onValueSelect(event: IChartItem) {
    this.objectSelect = event;
  }

  onValueDeselect(event: IChartItem) {
    this.objectSelect = null;
  }

  onValueChange(event: IChartItem) {
    this.objectHover = event;
  }

}

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    MatButtonModule, 
    RouterModule, 
    DlLineChartModule, 
    DlLegendModule, 
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    DocDetailModule
  ],
  exports: [LineChart],
  declarations: [LineChart],
})
export class LineChartModule {}
