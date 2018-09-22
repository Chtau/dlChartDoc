import {Homepage} from './pages/homepage';
import { Routes } from '@angular/router';
import { Piechart } from './pages/piechart';
import { BarChart } from './pages/barchart';
import { LineChart } from './pages/linechart';

export const DOCS_ROUTES: Routes = [
  {path: '', component: Homepage, pathMatch: 'full', data: {}},
  {path: 'piechart', component: Piechart, pathMatch: 'full', data: {}},
  {path: 'barchart', component: BarChart, pathMatch: 'full', data: {}},
  {path: 'linechart', component: LineChart, pathMatch: 'full', data: {}},
  {path: '**', redirectTo: ''},
];
