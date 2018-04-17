define(["require", "exports", "@angular/core/testing", "./profile-header-card.component"], function (require, exports, testing_1, profile_header_card_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('ProfileHeaderCardComponent', function () {
        var component;
        var fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [profile_header_card_component_1.ProfileHeaderCardComponent]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(profile_header_card_component_1.ProfileHeaderCardComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should be created', function () {
            expect(component).toBeTruthy();
        });
    });
});
//# sourceMappingURL=profile-header-card.component.spec.js.map