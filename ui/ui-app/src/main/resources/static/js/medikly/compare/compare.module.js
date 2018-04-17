var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@covalent/core", "ngx-perfect-scrollbar", "@angular/material", "@angular/cdk/collections", "@angular/flex-layout", "./compare.component", "@uirouter/angular"], function (require, exports, core_1, common_1, core_2, ngx_perfect_scrollbar_1, material_1, collections_1, flex_layout_1, compare_component_1, angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.COMPARE_STATES = {
        name: 'compare',
        url: '/compare/:ids',
        views: {
            "content": {
                component: compare_component_1.CompareComponent,
            }
        },
        data: {
            breadcrumbRoot: true,
            displayName: "Compare",
            module: 'compare',
            permissions: ['']
        }
    };
    var CompareModule = /** @class */ (function () {
        function CompareModule() {
        }
        CompareModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                    angular_1.UIRouterModule.forChild({ states: [exports.COMPARE_STATES] }),
                    material_1.MatCardModule,
                    material_1.MatToolbarModule,
                    material_1.MatTabsModule,
                    material_1.MatIconModule,
                    material_1.MatTooltipModule,
                    material_1.MatButtonModule,
                    material_1.MatButtonToggleModule,
                    material_1.MatListModule,
                    material_1.MatSliderModule,
                    material_1.MatCheckboxModule,
                    material_1.MatSidenavModule,
                    collections_1.SelectionModel,
                    material_1.MatRadioModule,
                    material_1.MatSelectModule,
                    material_1.MatProgressBarModule,
                    material_1.MatGridListModule,
                    flex_layout_1.FlexLayoutModule,
                    core_2.CovalentExpansionPanelModule,
                    material_1.MatMenuModule,
                ],
                declarations: [compare_component_1.CompareComponent,
                ]
            })
        ], CompareModule);
        return CompareModule;
    }());
    exports.CompareModule = CompareModule;
});
//# sourceMappingURL=compare.module.js.map