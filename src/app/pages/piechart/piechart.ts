import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule, MatInputModule, MatCheckboxModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { DlPieChartModule, Value, DlLegendModule, IChartItem, DonutConfiguration } from "dl-chart";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.html',
  styleUrls: ['./piechart.scss']
})
export class Piechart implements OnInit {

  hideChartHoverEffect: boolean = false;
  hideChartSelectEffect: boolean = false;

  useDonutStyle: boolean = false;
  donutSize: number = .5;
  donutColor: string = '#ffffff';
  donutConfig: DonutConfiguration = null;

  onChangeUseDonut(event: any) {
    this.recreateDonutConfig();
  }

  onChangeDonutSize(event: any) {
    this.recreateDonutConfig();
  }

  onChangeDonutColor(event: any) {
    this.recreateDonutConfig();
  }

  recreateDonutConfig() {
    if (this.useDonutStyle) {
      this.donutConfig = {
        color: this.donutColor,
        size: this.donutSize
      }
    } else {
      this.donutConfig = null;
    }
  }

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
    DlPieChartModule, 
    DlLegendModule, 
    MatInputModule, 
    MatCheckboxModule
  ],
  exports: [Piechart],
  providers: [
  ],
  declarations: [Piechart],
})
export class PiechartModule {}
