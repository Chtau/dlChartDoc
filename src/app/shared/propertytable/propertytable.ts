import {Component, NgModule, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {RouterModule} from '@angular/router';

export interface PropertyElement {
  name: string;
  description: string;
}

@Component({
  selector: 'app-property-table',
  templateUrl: './propertytable.html',
  styleUrls: ['./propertytable.scss']
})
export class PropertyTable {

  
  displayedColumns: string[] = ['name', 'description'];
  @Input()
  dataSource: PropertyElement[] = [];

}

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    RouterModule,
    CommonModule,
    MatIconModule
  ],
  exports: [PropertyTable],
  declarations: [PropertyTable],
})
export class PropertyTableModule {}
