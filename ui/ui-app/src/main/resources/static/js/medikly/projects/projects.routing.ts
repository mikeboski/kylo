/**
 * Created by German on 18/10/17.
 */
import {Routes} from '@angular/router';

import {ProjectsComponent} from './home/projects.component';
//import { ProjectViewComponent } from '../project-view/main/project-view.component';
import {MainComponent} from './main/main.component';
import {WorkflowComponent} from './workflow/workflow.component';

import { ModeCardComponent } from '../shared/display-documents/mode-card/mode-card.component';
import { ModeListComponent } from '../shared/display-documents/mode-list/mode-list.component';

export const ProjectsRoutes: Routes = [{
    path: '',
    component: MainComponent,
    children: [
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
        {
            path: 'workflow',
            component: WorkflowComponent
        }
    ]
},
    /* {
     path: 'view',
     loadChildren: '../project-view/project-view.module#ProjectViewModule'
     }*/
];
