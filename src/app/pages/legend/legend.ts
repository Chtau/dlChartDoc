import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule, MatInputModule, MatSelectModule, MatCheckboxModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DlBarChartModule, DlLegendModule, Value, IChartItem, ChartOrientation } from 'dl-chart';
import { DocDetailModule } from '../../shared/docdetail';
import { PropertyTableModule, PropertyElement } from '../../shared/propertytable';
import { PropertyTableValues  } from "../../shared/propertytable.values";
import { IValue } from 'dl-chart/lib/models/value.interface';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.html',
  styleUrls: ['./legend.scss']
})
export class Legend implements OnInit {

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

  objectSelect: IValue = null;

  constructor() {}

  ngOnInit(): void {
    
  }

  onLegendClick(event: IValue) {
    this.objectSelect = event;
  }

  propertiesChart: PropertyElement[] = [
    {name: 'chartid: string', description: 'Unique Chart id'},
    {name: 'hideChartHoverEffect?: boolean', description: 'hides the hover effect on the Legend when a Chart element is hovered'},
    {name: 'hideChartSelectEffect?: boolean', description: 'hides the click effect on the Legend when a Chart element is clicked'},
  ];

  eventChart: PropertyElement[] = [
    {name: '(legendClick) = $event: IValue', description: 'Legend Item was clicked'},
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
    PropertyTableModule
  ],
  exports: [Legend],
  declarations: [Legend],
})
export class LegendModule {}
