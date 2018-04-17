var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@angular/material", "@angular/flex-layout", "./toolbar/toolbar-templates.component", "./modal/modal-templates-gallery.component"], function (require, exports, core_1, common_1, material_1, flex_layout_1, toolbar_templates_component_1, modal_templates_gallery_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SharedListingModule = /** @class */ (function () {
        function SharedListingModule() {
        }
        SharedListingModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    flex_layout_1.FlexLayoutModule,
                    material_1.MatInputModule,
                    material_1.MatButtonModule,
                    material_1.MatButtonToggleModule,
                    material_1.MatSidenavModule,
                    material_1.MatCardModule,
                    material_1.MatIconModule,
                    material_1.MatMenuModule,
                    material_1.MatListModule,
                    material_1.MatToolbarModule,
                    material_1.MatGridListModule
                ],
                declarations: [toolbar_templates_component_1.ToolbarTemplatesComponent, modal_templates_gallery_component_1.ModalTemplatesGalleryComponent],
                exports: [toolbar_templates_component_1.ToolbarTemplatesComponent, modal_templates_gallery_component_1.ModalTemplatesGalleryComponent]
            })
        ], SharedListingModule);
        return SharedListingModule;
    }());
    exports.SharedListingModule = SharedListingModule;
});
//# sourceMappingURL=shared-listing.module.js.map