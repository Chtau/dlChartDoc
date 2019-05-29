import {Component, NgModule, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { Value, TooltipConfiguration, Point, Line } from 'dl-chart';
import { DlChartModule } from "dl-chart";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class Homepage implements OnInit {

  values1: Value[] = [
    new Value('Red', 5, 'Red'),
    new Value('Blue', 3, 'Blue'),
    new Value('Green', 10, 'Green'),
    new Value('Orange', 3, 'Orange'),
    new Value('Yellow', 7, 'Yellow'),
  ];

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

  constructor() {}

  ngOnInit(): void {
    
  }
}

@NgModule({
  imports: [MatButtonModule, RouterModule, DlChartModule],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule {}
