import {Component, NgModule, OnInit, ElementRef, ViewChild} from '@angular/core';
import {MatButtonModule, MatInputModule, MatSelectModule, MatCheckboxModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DlBarChartModule, DlLegendModule, Value, IChartItem, ChartOrientation, ChartItemService, ServiceItem } from 'dl-chart';
import { DocDetailModule } from '../../shared/docdetail';
import { PropertyTableModule, PropertyElement } from '../../shared/propertytable';
import { PropertyTableValues  } from "../../shared/propertytable.values";
import { GithubGistModule } from '../../shared/gist.component';

@Component({
  selector: 'app-chartitemservice',
  templateUrl: './chartitemservice.html',
  styleUrls: ['./chartitemservice.scss']
})
export class ChartItemServicePage implements OnInit {

  @ViewChild('eventlog') private eventLogController: ElementRef;

  values: Value[] = [
    new Value('Red', 5, 'Red'),
    new Value('Blue', 3, 'Blue'),
    new Value('Green', 10, 'Green'),
    new Value('Orange', 3, 'Orange'),
    new Value('Yellow', 7, 'Yellow'),
  ];

  objectSelect: ServiceItem<IChartItem> = null;
  objectHover: ServiceItem<IChartItem> = null;

  eventLog: string[] = [];

  constructor(private chartService: ChartItemService) {}

  ngOnInit(): void {
    this.chartService.chartValueChange.subscribe((item:ServiceItem<IChartItem[]>) => {
      this.eventLog.push("Event: chartValueChange received { Items: " + item.value.length + " }");
      this.scrollToBottom();
    });
    this.chartService.chartValueDeselect.subscribe((item:ServiceItem<IChartItem>) => {
      this.objectSelect = null;
      this.eventLog.push("Event: chartValueDeselect received { Value: " + item.value.sourceItem["value"] + " }");
      this.scrollToBottom();
    });
    this.chartService.chartValueHover.subscribe((item:ServiceItem<IChartItem>) => {
      this.objectHover = item;
      this.eventLog.push("Event: chartValueHover received { Value: " + item.value.sourceItem["value"] + " }");
      this.scrollToBottom();
      if (this.customTooltip) {
        this.tooltipShow = true;
        this.tooltipX = item.tooltipX;
        this.tooltipY = item.tooltipY;
      }
    });
    this.chartService.chartValueLeave.subscribe((item:ServiceItem<any>) => {
      this.objectHover = null;
      this.eventLog.push("Event: chartValueLeave received");
      this.scrollToBottom();
      this.tooltipShow = false;
    });
    this.chartService.chartValueSelect.subscribe((item:ServiceItem<IChartItem>) => {
      this.objectSelect = item;
      this.eventLog.push("Event: chartValueSelect received { Value: " + item.value.sourceItem["value"] + " }");
      this.scrollToBottom();
    });
  }

  scrollToBottom(): void {
    try {
        this.eventLogController.nativeElement.scrollTop = this.eventLogController.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  onClickClearLog() {
    this.eventLog = [];
  }

  customTooltip: boolean = false;
  tooltipX: number;
  tooltipY: number;
  tooltipShow: boolean = false;

  methodsChart: PropertyElement[] = [
    {name: 'setChartValues(val: ServiceItem<IChartItem[]>)', description: 'internal used from a Chart'},
    {name: 'getChartValues(chartId: string):ServiceItem<IChartItem[]>', description: 'receive all values for a Chart'},
    {name: 'hoverChartValue(val: ServiceItem<IChartItem>)', description: 'internal used from a Chart'},
    {name: 'leaveChartValue(val: ServiceItem<any>)', description: 'internal used from a Chart'},
    {name: 'selectChartValue(val: ServiceItem<IChartItem>)', description: 'internal used from a Chart'},
    {name: 'deselectChartValue(val: ServiceItem<IChartItem>)', description: 'internal used from a Chart'},
  ];

  eventChart: PropertyElement[] = [
    {name: '(chartValueChange) = $event: ServiceItem<IChartItem[]>', description: 'Values are set for a Chart'},
    {name: '(chartValueHover) = $event: ServiceItem<IChartItem>', description: 'Item from a Chart is hovered'},
    {name: '(chartValueLeave) = $event: ServiceItem<any>', description: 'Mouse left a Chart item'},
    {name: '(chartValueSelect) = $event: ServiceItem<IChartItem>', description: 'Item from a Chart was selected'},
    {name: '(chartValueDeselect) = $event: ServiceItem<IChartItem>', description: 'Item from a Chart was deselect'},
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
  exports: [ChartItemServicePage],
  declarations: [ChartItemServicePage],
})
export class ChartItemServiceModule {}
