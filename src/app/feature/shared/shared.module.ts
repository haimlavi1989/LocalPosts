import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MapComponent } from './components/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SummaryPipe } from './pipes/summary.pipe';
import { DistancePipe } from './pipes/distance.pipe';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    PaginationComponent,
    MapComponent,
    SummaryPipe,
    DistancePipe
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
  ],
  exports: [
    LoadingSpinnerComponent,
    PaginationComponent,
    MapComponent,
    SummaryPipe,
    DistancePipe,
    CommonModule
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule {}
