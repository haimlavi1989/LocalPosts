import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    PaginationComponent
  ],
  imports: [CommonModule],
  exports: [
    LoadingSpinnerComponent,
    PaginationComponent,
    CommonModule
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule {}
