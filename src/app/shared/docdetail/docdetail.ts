import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatMenuModule, MatIconModule, MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-doc-detail',
  templateUrl: './docdetail.html',
  styleUrls: ['./docdetail.scss']
})
export class DocDetail {

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
