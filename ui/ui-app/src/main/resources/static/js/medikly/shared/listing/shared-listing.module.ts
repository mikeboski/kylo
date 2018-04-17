import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule, MatGridListModule,
    MatMenuModule,
    MatSidenavModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import { ToolbarTemplatesComponent } from './toolbar/toolbar-templates.component';
import { ModalTemplatesGalleryComponent } from './modal/modal-templates-gallery.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatToolbarModule,
        MatGridListModule
    ],
    declarations: [ToolbarTemplatesComponent, ModalTemplatesGalleryComponent],
    exports: [ToolbarTemplatesComponent, ModalTemplatesGalleryComponent]
})
export class SharedListingModule {
}
