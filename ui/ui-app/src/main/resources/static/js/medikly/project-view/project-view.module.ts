import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatProgressBarModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSidenavModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  //MatExpansionModule,
  MatSliderModule,
  MatChipsModule,

} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from '../shared/charts/charts.module';
//import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {SharedListingModule} from '../shared/listing/shared-listing.module';
import {OrderModule} from 'ngx-order-pipe';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import {DialogModule} from '../shared/dialog/dialog.module';
import {DisplayDocumentsModule} from '../shared/display-documents/display-documents.module';
import {CovalentExpansionPanelModule, CovalentChipsModule, CovalentStepsModule, CovalentDataTableModule, CovalentSearchModule, CovalentPagingModule} from '@covalent/core';
import {ProjectViewRoutes} from './project-view.routing';
import {ProjectViewComponent} from './main/project-view.component';
import {InfoPanelComponent} from './main/info-panel/info-panel.component';
import {HomeComponent} from './home/home.component';
import {TargetComponent} from './target-component/target.component';
import {SharedProfileModule} from '../shared/profile/shared-profile.module';
import {TargetTabsComponent} from './target-component/target-tabs/target-tabs.component';
import { AssetsComponent } from './assets/assets.component';
import {SegmentsComponent} from './segments/segments.component';
import {ReportsComponent} from './reports/reports.component';
//import {NgCircleProgressModule} from 'ng-circle-progress';
import {ExpansionChartComponent} from './target-component/expansion-chart/expansion-chart.component';
import {HttpService} from '../services/http.service';

import {CardLayoutModule} from '../shared/card-layout/card-layout.module';
import {InfoTopComponent} from './main/info-top/info-top.component';
import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";
import {DialogWorkspaceModule} from '../project-workspace/dialog/dialog-workspace.module';



export let HOME_STATES: Ng2StateDeclaration = {
    name: 'mdkprojectsviewhome',
    url: '/mdkprojectsviewhome',
    views: {
        "content": {
            component: HomeComponent,
        }
    },
    data: {
        breadcrumbRoot: true,
        displayName: "Projects Home",
        module: 'projects',
        permissions: ['']
    }
};


/*
let projectsViewState = { name: 'mdkprojectsview', url: '/mdkprojectsview', 
   views: {
  "content": {
    component: ProjectViewComponent,
  }},
  data: {
    breadcrumbRoot: true,
    displayName: "Project Name",
    module: 'projects',
    permissions: ['']
  }
};
let homeState = { name: 'mdkprojectsviewhome', url: '/mdkprojectsviewhome',    views: {
  "content": {
    component: HomeComponent,
  }}
};
let targetState = { name: 'view.target', url: '/target',    views: {
  "child-content": {
    component: TargetComponent,
  }}
};
let reportsState = { name: 'view.reports', url: '/reports',    views: {
  "child-content": {
    component: ReportsComponent,
  }}
};
let assetsState = { name: 'view.assets', url: '/assets',    views: {
  "child-content": {
    component: AssetsComponent,
  }}
};
*/

@NgModule({
  imports: [
    CommonModule,
    //UIRouterModule.forChild({ states: [projectsViewState,homeState,targetState,reportsState,assetsState]}),
    UIRouterModule.forChild({ states: [HOME_STATES]}),
    PerfectScrollbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatMenuModule,
    MatInputModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSelectModule,
    ChartsModule,
    //NgxDatatableModule,
    FlexLayoutModule,
    SharedListingModule,
    MatSidenavModule,
    FormsModule,
    OrderModule,
    DragulaModule,
    DialogModule,
    DisplayDocumentsModule,
    CovalentExpansionPanelModule,
    CovalentDataTableModule,
    CovalentSearchModule,
    CovalentPagingModule,
    //MatExpansionModule,
    CovalentStepsModule,
    SharedProfileModule,
    ReactiveFormsModule,
    MatChipsModule,
    CovalentChipsModule,
    CardLayoutModule,
/*    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 40,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      showSubtitle: false,
      animationDuration: 300,
    }),*/
    DialogWorkspaceModule
  ],
  declarations: [
    ProjectViewComponent,
    HomeComponent,
    TargetComponent,
    TargetTabsComponent,
    SegmentsComponent,
    ReportsComponent,
    ExpansionChartComponent,
    InfoPanelComponent,
    InfoTopComponent,
    AssetsComponent
  ],
  providers: [
    HttpService
  ]

})

export class ProjectViewModule {
}
