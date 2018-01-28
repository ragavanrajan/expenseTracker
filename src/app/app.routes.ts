import {Routes} from '@angular/router';
import {CreateEntryComponent} from './components/create-entry/create-entry.component';
import {HomeComponent} from './components/home/home.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'createEntry', component: CreateEntryComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
