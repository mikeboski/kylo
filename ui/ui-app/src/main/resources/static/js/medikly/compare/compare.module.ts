/**
 * Created by development on 27/7/17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CovalentExpansionPanelModule} from '@covalent/core';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
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
  MatCheckboxModule,
  MatSidenavModule, MatRadioModule, MatSelectModule,
  MatProgressBarModule,
  MatGridListModule,
  MatMenuModule
} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CompareComponent} from './compare.component';
import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";

export let COMPARE_STATES: Ng2StateDeclaration = {
  name: 'compare',
  url: '/compare/:ids',
  views: {
    "content": {
      component: CompareComponent,
    }
  },
  data: {
    breadcrumbRoot: true,
    displayName: "Compare",
    module: 'compare',
    permissions: ['']
  }
};

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    UIRouterModule.forChild({states: [COMPARE_STATES]}),
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSidenavModule,
    SelectionModel,
    MatRadioModule,
    MatSelectModule,
    MatProgressBarModule,
    MatGridListModule,
    FlexLayoutModule,
    CovalentExpansionPanelModule,
    MatMenuModule,
  ],
  declarations: [CompareComponent,
  ]
})

export class CompareModule {
}
