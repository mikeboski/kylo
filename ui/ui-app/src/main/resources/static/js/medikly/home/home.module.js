var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@angular/material", "./home.component", "@uirouter/angular", "@angular/flex-layout"], function (require, exports, core_1, common_1, material_1, home_component_1, angular_1, flex_layout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HOME_STATES = {
        name: 'homepage',
        url: '/homepage',
        views: {
            "content": {
                component: home_component_1.HomeComponent,
            }
        },
        data: {
            breadcrumbRoot: true,
            displayName: "Home",
            module: 'homepage',
            permissions: ['']
        }
    };
    var HomeModule = /** @class */ (function () {
        function HomeModule() {
        }
        HomeModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    angular_1.UIRouterModule.forChild({ states: [exports.HOME_STATES] }),
                    material_1.MatIconModule,
                    material_1.MatCardModule,
                    material_1.MatButtonModule,
                    material_1.MatListModule,
                    material_1.MatToolbarModule,
                    material_1.MatProgressBarModule,
                    material_1.MatMenuModule,
                    flex_layout_1.FlexLayoutModule
                ],
                declarations: [home_component_1.HomeComponent]
            })
        ], HomeModule);
        return HomeModule;
    }());
    exports.HomeModule = HomeModule;
});
//# sourceMappingURL=home.module.js.map