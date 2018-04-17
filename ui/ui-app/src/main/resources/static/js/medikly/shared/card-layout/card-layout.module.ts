import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    CardLayoutComponent, MatkCardLayoutContentDirective,
    MatkCardLayoutLeftSidebarDirective, MatkCardLayoutRightSidebarDirective
} from './card-layout.component';
import {MatToolbarModule, MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatIconModule,
        PerfectScrollbarModule
    ],
    declarations: [CardLayoutComponent, MatkCardLayoutContentDirective, MatkCardLayoutLeftSidebarDirective, MatkCardLayoutRightSidebarDirective],
    exports: [CardLayoutComponent, MatkCardLayoutContentDirective, MatkCardLayoutLeftSidebarDirective, MatkCardLayoutRightSidebarDirective]
})
export class CardLayoutModule {
}
