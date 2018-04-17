import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    MatToolbarModule
} from '@angular/material';

import {HomeComponent} from './home.component';
import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";


import { FlexLayoutModule} from "@angular/flex-layout";

export let HOME_STATES: Ng2StateDeclaration = {
    name: 'homepage',
    url: '/homepage',
    views: {
        "content": {
            component: HomeComponent,
        }
    },
    data: {
        breadcrumbRoot: true,
        displayName: "Home",
        module: 'homepage',
        permissions: ['']
    }
};


@NgModule({
    imports: [
        CommonModule,
        UIRouterModule.forChild({states: [HOME_STATES]}),
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatMenuModule,
        FlexLayoutModule
    ],
    declarations: [HomeComponent]
})

export class HomeModule {
}