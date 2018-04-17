/**
 * Created by development on 23/8/17.
 */
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
//import { DisplayDocumentsComponent } from './display-documents.component';
//import { ModeListComponent } from './mode-list/mode-list.component';
//import { ModeCardComponent } from './mode-card/mode-card.component';
import { DisplayDocumentsService } from './display-documents.service';
import { OrderModule } from 'ngx-order-pipe';
import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatMenuModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
    FlexLayoutModule,
    MatSidenavModule,
    FormsModule,
    OrderModule
  ],
  declarations: [],
  exports: [],
  providers: [DisplayDocumentsService]

})

export class DisplayDocumentsModule {}
