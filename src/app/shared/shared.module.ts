import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';
import { SpinnerComponent } from './components/spinner/spinner.component';

const COMPONENTS = [
  NavbarComponent,
  ToolbarComponent,
  SpinnerComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: COMPONENTS
})

export class SharedModule { }
