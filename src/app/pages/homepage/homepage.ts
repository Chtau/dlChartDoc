import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { Value, TooltipConfiguration } from 'dl-chart';
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
