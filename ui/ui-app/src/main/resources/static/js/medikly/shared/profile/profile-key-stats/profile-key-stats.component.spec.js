define(["require", "exports", "@angular/core/testing", "./profile-key-stats.component"], function (require, exports, testing_1, profile_key_stats_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('ProfileKeyStatsComponent', function () {
        var component;
        var fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [profile_key_stats_component_1.ProfileKeyStatsComponent]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(profile_key_stats_component_1.ProfileKeyStatsComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should be created', function () {
            expect(component).toBeTruthy();
        });
    });
});
//# sourceMappingURL=profile-key-stats.component.spec.js.map