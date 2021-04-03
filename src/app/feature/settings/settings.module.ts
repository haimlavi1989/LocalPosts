import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';


@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule,
    SharedModule,
    SettingsRoutingModule
  ],
  providers: [
  ],
})
export class SettingsModule {}
