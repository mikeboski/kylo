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
  MatSidenavModule,  MatRadioModule,
  //MatExpansionModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidebarComponent } from './sidebar.component';
import { SelectionModel } from '@angular/cdk/collections';

@NgModule({
  imports: [
    CommonModule,
    SelectionModel,
    FlexLayoutModule,
    //MatExpansionModule,
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
  declarations: [ SidebarComponent ],
  exports: [SidebarComponent]
})

export class SidebarModule {}
