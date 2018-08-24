import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routes.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpService } from './core/services/http.service';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridApplicationComponent } from './grid-application/grid-application.component';
import {AgGridModule} from 'ag-grid-angular/main';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GridApplicationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTpur7VmcK5lV2TfKfbC68dx_FptCVfak',
      libraries: ['places']
    }),
    AgGridModule.withComponents([]),
    AgmJsMarkerClustererModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
