import {Routes} from '@angular/router';

import {ProjectViewComponent} from './main/project-view.component';
import {HomeComponent} from './home/home.component';
import {TargetComponent} from './target-component/target.component';
import {SegmentsComponent} from './segments/segments.component';
import {ModeCardComponent} from '../shared/display-documents/mode-card/mode-card.component';
import {ModeListComponent} from '../shared/display-documents/mode-list/mode-list.component';
import {ReportsComponent} from './reports/reports.component';
import { AssetsComponent } from './assets/assets.component';

export const ProjectViewRoutes: Routes = [
    {path: ':id/workspace', loadChildren: '../project-workspace/project-workspace.module#ProjectWorkspaceModule'},
 {
  path: ':id',
  component: ProjectViewComponent,
  children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
      path: 'home',
      component: HomeComponent
    },{
      path: 'target',
      component: TargetComponent
    },
      {
          path: 'measure/reports',
          component: ReportsComponent
      },
    {
      path: 'assets',
      component: AssetsComponent
    },
      {
          path: 'personalize/segments',
          component: SegmentsComponent,
          children: [
              {path: '', redirectTo: 'recent', pathMatch: 'full'},
              {
                  path: 'recent',
                  component: ModeCardComponent
              },
              {
                  path: 'shared',
                  component: ModeCardComponent
              },
              {
                  path: 'starred',
                  component: ModeCardComponent
              },
              {
                  path: 'archive',
                  component: ModeCardComponent
              },
              {
                  path: 'list',
                  component: ModeListComponent
              }
          ]
      }]
}
];

/**
 *
 *   children: [
 {path: '', redirectTo: 'home', pathMatch: 'full'},
 {
   path: 'home',
   component: ProjectsComponent,
   children: [
     {path: '', redirectTo: 'recent', pathMatch: 'full'},
     {
       path: 'recent',
       component: ModeCardComponent
     },
     {
       path: 'shared',
       component: ModeCardComponent
     },
     {
       path: 'starred',
       component: ModeCardComponent
     },
     {
       path: 'archive',
       component: ModeCardComponent
     },
     {
       path: 'list',
       component: ModeListComponent
     }
   ]
 },
 *
 */



