import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,

    MatDialogModule,
    MatRadioModule,

} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ProjectsComponent} from './home/projects.component';
import {WorkflowComponent} from './workflow/workflow.component';
import {MainComponent} from './main/main.component';
import {SharedListingModule} from '../shared/listing/shared-listing.module';
import {OrderModule} from 'ngx-order-pipe';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import {DialogModule} from '../shared/dialog/dialog.module';
import {CovalentExpansionPanelModule} from '@covalent/core';
import {CovalentStepsModule} from '@covalent/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogNewProject} from './dialog/new-project/dialog.new-project';
import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";

import { ModeCardComponent } from '../shared/display-documents/mode-card/mode-card.component';
import { ModeListComponent } from '../shared/display-documents/mode-list/mode-list.component';
import {DisplayDocumentsService} from "../shared/display-documents/display-documents.service";
import {DisplayDocumentsComponent} from "../shared/display-documents/display-documents.component";
export let HOME_STATES: Ng2StateDeclaration =
    {
        name: 'projects',
        url: '/projects',
        views: {
            "content": {
                component: MainComponent,
            }
        }
    },
    data: {
        breadcrumbRoot: true,
        displayName: "Projects",
        module: 'projects',
        permissions: ['']
    }
    ;


let projectsState = { name: 'projects', url: '/projects',    views: {
    "content": {
        component: MainComponent,
    }}
};
let homeState = { name: 'projects.home', url: '/home',    views: {
    "child-content": {
        component: ProjectsComponent,
    }},
    data: {
        breadcrumbRoot: true,
        displayName: "Projects",
        module: 'projects',
        permissions: ['']
    }
};
let recentState = { name: 'projects.home.recent', url: '/recent',    views: {
    "display-documents": {
        component: ModeCardComponent,
    }}
};
let sharedState = { name: 'projects.home.shared', url: '/shared',    views: {
    "display-documents": {
        component: ModeCardComponent,
    }}
};
let starredState = { name: 'projects.home.starred', url: '/starred',    views: {
    "display-documents": {
        component: ModeCardComponent,
    }}
};
let archiveState = { name: 'projects.home.archive', url: '/archive',    views: {
    "display-documents": {
        component: ModeCardComponent,
    }}
};
let listState = { name: 'projects.home.list', url: '/list',    views: {
    "display-documents": {
        component: ModeListComponent,
    }}
};




@NgModule({
    imports: [
        CommonModule,
        PerfectScrollbarModule,
        UIRouterModule.forChild({ states: [projectsState,homeState,recentState,sharedState,starredState,archiveState,listState]}),
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatMenuModule,
        MatTabsModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDialogModule,
        FlexLayoutModule,
        SharedListingModule,
        FlexLayoutModule,
        MatSidenavModule,
        FormsModule,
        OrderModule,
        DragulaModule,
        DialogModule,
        CovalentExpansionPanelModule,

        CovalentStepsModule,
        ReactiveFormsModule
    ],
    declarations: [ProjectsComponent, MainComponent, WorkflowComponent, DialogNewProject, DisplayDocumentsComponent, ModeCardComponent, ModeListComponent
    ],
    entryComponents: [DialogNewProject],
    providers: [DisplayDocumentsService]


})

export class ProjectsModule {
}