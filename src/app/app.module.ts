import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MenubarComponent} from './components/menubar/menubar.component';
import {ButtonModule, CalendarModule, MenubarModule, PanelModule} from 'primeng/primeng';
import {MainComponent} from './components/main/main.component';
import {CreateEntryComponent} from './components/create-entry/create-entry.component';
import {RouterModule, Routes} from '@angular/router';
import {ROUTES} from './app.routes';
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/components/table/table';
import {DataService} from './services/data.service';
import {AddEntryComponent} from './components/add-entry/add-entry.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    MainComponent,
    CreateEntryComponent,
    HomeComponent,
    AddEntryComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    ButtonModule,
    RouterModule.forRoot(ROUTES),
    PanelModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    CalendarModule

  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
