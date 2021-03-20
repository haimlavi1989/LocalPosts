import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MapComponent } from './components/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SummaryPipe } from './pipes/summary.pipe';
import { DistancePipe } from './pipes/distance.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    PaginationComponent,
    MapComponent,
    SummaryPipe,
    DistancePipe,
    AlertComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoadingSpinnerComponent,
    PaginationComponent,
    MapComponent,
    SummaryPipe,
    DistancePipe,
    CommonModule,
    AlertComponent,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule {}
