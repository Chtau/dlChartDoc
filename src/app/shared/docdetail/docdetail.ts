import {Component, NgModule, Input, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatMenuModule, MatIconModule, MatTabsModule, MatTabChangeEvent} from '@angular/material';
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
