import {Component, NgModule, Input, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule, MatTabChangeEvent } from '@angular/material/tabs';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-doc-detail',
  templateUrl: './docdetail.html',
  styleUrls: ['./docdetail.scss']
})
export class DocDetail {

  currentFirstTabTitle: string = "Chart";
  @Input()
  set firstTabTitle(val: string) {
    this.currentFirstTabTitle = val;
  }
}

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    RouterModule,
    CommonModule,
    MatIconModule
  ],
  exports: [DocDetail],
  declarations: [DocDetail],
})
export class DocDetailModule {}
