import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule, MatInputModule, MatSelectModule, MatCheckboxModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DlBarChartModule, DlLegendModule, Value, IChartItem, ChartOrientation } from 'dl-chart';
import { DocDetailModule } from '../../shared/docdetail';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.html',
  styleUrls: ['./barchart.scss']
})
export class BarChart implements OnInit {

  selectedOrientation: ChartOrientation = ChartOrientation.Bottom;
  barOffset: number = 13;
  scaleSteps: number = 10;
  leftScaleAxis: boolean = true;
  rightScaleAxis: boolean = false;
  hideSelectLine: boolean = false;

  hideChartHoverEffect: boolean = false;
  hideChartSelectEffect: boolean = false;

  values: Value[] = [
    new Value('Red', 5, 'Red'),
    new Value('Blue', 3, 'Blue'),
    new Value('Green', 10, 'Green'),
    new Value('Orange', 3, 'Orange'),
    new Value('Yellow', 7, 'Yellow'),
  ];

  filterValue: string = null;

  get filterValues(): Value[] {
    if (this.filterValue === null || this.filterValue === '') {
      return this.values;
    }
    return this.values.filter(val => {
      if (val.name.toLowerCase().endsWith(this.filterValue.toLowerCase()) 
      || val.name.toLowerCase().startsWith(this.filterValue.toLowerCase())
      || val.value.toString() === this.filterValue ) {
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
    DlBarChartModule, 
    DlLegendModule, 
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    DocDetailModule
  ],
  exports: [BarChart],
  declarations: [BarChart],
})
export class BarChartModule {}
