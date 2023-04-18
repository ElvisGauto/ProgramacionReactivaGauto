import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../shared/material/material.module';

import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    SharedModule
  ],
  providers: [],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
