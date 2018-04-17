define(["require", "exports", "@angular/core/testing", "./reports.component"], function (require, exports, testing_1, reports_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('ReportsComponent', function () {
        var component;
        var fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [reports_component_1.ReportsComponent]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(reports_component_1.ReportsComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should be created', function () {
            expect(component).toBeTruthy();
        });
    });
});
//# sourceMappingURL=reports.component.spec.js.map