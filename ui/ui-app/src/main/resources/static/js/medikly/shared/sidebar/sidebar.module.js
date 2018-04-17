var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@angular/material", "@angular/forms", "@angular/flex-layout", "./sidebar.component", "@angular/cdk/collections"], function (require, exports, core_1, common_1, material_1, forms_1, flex_layout_1, sidebar_component_1, collections_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SidebarModule = /** @class */ (function () {
        function SidebarModule() {
        }
        SidebarModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    collections_1.SelectionModel,
                    flex_layout_1.FlexLayoutModule,
                    //MatExpansionModule,
                    material_1.MatCardModule,
                    material_1.MatToolbarModule,
                    material_1.MatTabsModule,
                    material_1.MatIconModule,
                    material_1.MatTooltipModule,
                    material_1.MatButtonModule,
                    material_1.MatButtonToggleModule,
                    material_1.MatListModule,
                    material_1.MatSliderModule,
                    material_1.MatInputModule,
                    material_1.MatGridListModule,
                    material_1.MatCheckboxModule,
                    material_1.MatSidenavModule,
                    material_1.MatSelectModule,
                    material_1.MatRadioModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule
                ],
                declarations: [sidebar_component_1.SidebarComponent],
                exports: [sidebar_component_1.SidebarComponent]
            })
        ], SidebarModule);
        return SidebarModule;
    }());
    exports.SidebarModule = SidebarModule;
});
//# sourceMappingURL=sidebar.module.js.map