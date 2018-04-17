/**
 * Created by development on 4/7/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatSliderModule,
  MatInputModule,
  MatGridListModule,
  MatCheckboxModule,
  MatSidenavModule, MatRadioModule,
   MatSelectModule
} from '@angular/material';

import {SelectionModel} from '@angular/cdk/collections';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FilterComponent } from './filter.component';

@NgModule({
  imports: [
    CommonModule,
    SelectionModel,
    FlexLayoutModule,

    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatSliderModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ FilterComponent ],
  exports: [FilterComponent]
})

export class FilterModule {}
