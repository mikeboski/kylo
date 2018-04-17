define(["require", "exports", "@angular/core/testing", "./main.component"], function (require, exports, testing_1, main_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('MainComponent', function () {
        var component;
        var fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [main_component_1.MainComponent]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(main_component_1.MainComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should be created', function () {
            expect(component).toBeTruthy();
        });
    });
});
//# sourceMappingURL=main.component.spec.js.map