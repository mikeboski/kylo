var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "./profile-header-card/profile-header-card.component", "./profile-key-stats/profile-key-stats.component", "@angular/material", "@angular/flex-layout"], function (require, exports, core_1, common_1, profile_header_card_component_1, profile_key_stats_component_1, material_1, flex_layout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SharedProfileModule = /** @class */ (function () {
        function SharedProfileModule() {
        }
        SharedProfileModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    flex_layout_1.FlexLayoutModule,
                    material_1.MatButtonModule,
                    material_1.MatCardModule,
                    material_1.MatIconModule,
                    material_1.MatMenuModule,
                    material_1.MatListModule
                ],
                declarations: [profile_header_card_component_1.ProfileHeaderCardComponent, profile_key_stats_component_1.ProfileKeyStatsComponent],
                exports: [profile_header_card_component_1.ProfileHeaderCardComponent, profile_key_stats_component_1.ProfileKeyStatsComponent]
            })
        ], SharedProfileModule);
        return SharedProfileModule;
    }());
    exports.SharedProfileModule = SharedProfileModule;
});
//# sourceMappingURL=shared-profile.module.js.map