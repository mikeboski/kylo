define(["require", "exports", "@angular/core/testing", "./main-activity.component"], function (require, exports, testing_1, main_activity_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('MainActivityComponent', function () {
        var component;
        var fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [main_activity_component_1.MainActivityComponent]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(main_activity_component_1.MainActivityComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should be created', function () {
            expect(component).toBeTruthy();
        });
    });
});
//# sourceMappingURL=main-activity.component.spec.js.map