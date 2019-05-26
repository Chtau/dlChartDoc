import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule, MatInputModule, MatSelectModule, MatCheckboxModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DlBarChartModule, DlLegendModule, Value, IChartItem, ChartOrientation } from 'dl-chart';
import { DocDetailModule } from '../../shared/docdetail';
import { PropertyTableModule, PropertyElement } from '../../shared/propertytable';
import { PropertyTableValues  } from "../../shared/propertytable.values";
import { GithubGistModule } from '../../shared/gist.component';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.html',
  styleUrls: ['./barchart.scss']
})
export class BarChart implements OnInit {

  selectedOrientation: ChartOrientation = ChartOrientation.Bottom;
  barOffset: number = 5;
  scaleSteps: number = 10;
  leftScaleAxis: boolean = true;
  rightScaleAxis: boolean = false;
  hideSelectLine: boolean = false;
  barFullFilled: boolean = false;
  hideTooltip: boolean = false;
  animation: boolean = true;

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

  propertiesChart: PropertyElement[] = [
    {name: 'chartid: string', description: 'Unique Chart id'},
    {name: 'values: Value[]', description: 'Values to show in the Chart'},
    {name: 'animation: boolean', description: 'can disable chart build/refresh animation'},
    {name: 'orientation?: ChartOrientation', description: 'orientation for the Chart value Axis'},
    {name: 'barOffset?: number', description: 'offset between the chart Bars in percent Chart width'},
    {name: 'steps?: number', description: 'number of steps in the scale Axis'},
    {name: 'leftScaleAxis?: boolean', description: 'show the left scale Axis'},
    {name: 'rightScaleAxis?: boolean', description: 'show the right scale Axis'},
    {name: 'hideSelectLine?: boolean', description: 'hides the line when a Bar is selected'},
    {name: 'barFullFilled?: boolean', description: 'Bars colors are full filled'},
    {name: 'hideTooltip?: boolean', description: 'Hides the Tooltip on the Chart'},
  ];

  eventChart: PropertyElement[] = [
    {name: '(valueSelect) = $event: IChartItem', description: 'Item was selected'},
    {name: '(valueDeselect) = $event: IChartItem', description: 'Item was deselect'},
    {name: '(valueChange) = $event: IChartItem', description: 'Item hovered'},
  ];

  propertiesTheme: PropertyElement[] = [
    {name: 'line-color', description: 'Color of the Lines for the Axis'},
    {name: 'text-color', description: 'Label text color'},
    {name: 'ground-line-color', description: '0 value line color'},
    {name: 'selection-line-color', description: 'selection line color'},
    {name: 'select-stroke-width', description: 'selection line stroke width'},
    {name: 'selection-stroke-dasharray', description: 'selection line stroke dasharray'}
  ];

  propTable: PropertyTableValues = new PropertyTableValues()

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
    DocDetailModule,
    PropertyTableModule,
    GithubGistModule
  ],
  exports: [BarChart],
  declarations: [BarChart],
})
export class BarChartModule {}
