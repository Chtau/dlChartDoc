import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar {

}

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    CommonModule,
    MatIconModule
  ],
  exports: [NavBar],
  declarations: [NavBar],
})
export class NavBarModule {}
