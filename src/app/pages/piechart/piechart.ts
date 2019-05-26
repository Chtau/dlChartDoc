import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule, MatInputModule, MatCheckboxModule, MatTabsModule, MatSliderModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { DlPieChartModule, Value, DlLegendModule, IChartItem } from "dl-chart";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DocDetailModule } from '../../shared/docdetail';
import { PropertyTableModule, PropertyElement } from '../../shared/propertytable';
import { PropertyTableValues  } from "../../shared/propertytable.values";

import { GithubGistModule } from '../../shared/gist.component';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.html',
  styleUrls: ['./piechart.scss']
})
export class Piechart implements OnInit {

  hideTooltip: boolean = false;

  hideChartHoverEffect: boolean = false;
  hideChartSelectEffect: boolean = false;
  animation: boolean = true;

  donutRadius: number = 0;

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
    {name: 'donut?: number', description: 'sets the size of the donut radius (must be between 0 - 1)'},
    {name: 'hideTooltip?: boolean', description: 'Hides the Tooltip on the Chart'},
  ];

  eventChart: PropertyElement[] = [
    {name: '(valueSelect) = $event: IChartItem', description: 'Item was selected'},
    {name: '(valueDeselect) = $event: IChartItem', description: 'Item was deselect'},
    {name: '(valueChange) = $event: IChartItem', description: 'Item hovered'},
  ];

  propertiesTheme: PropertyElement[] = [
    {name: 'donut-color', description: 'Color for the Donut hole'}
  ];

  propTable: PropertyTableValues = new PropertyTableValues()

}

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    MatButtonModule, 
    MatTabsModule,
    MatSliderModule,
    RouterModule, 
    DlPieChartModule, 
    DlLegendModule, 
    MatInputModule, 
    MatCheckboxModule,
    DocDetailModule,
    PropertyTableModule,
    GithubGistModule,
  ],
  exports: [Piechart],
  providers: [
    
  ],
  declarations: [Piechart],
})
export class PiechartModule {}
