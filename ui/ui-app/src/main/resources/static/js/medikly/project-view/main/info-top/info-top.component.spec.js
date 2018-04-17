define(["require", "exports", "@angular/core/testing", "./info-top.component"], function (require, exports, testing_1, info_top_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('InfoTopComponent', function () {
        var component;
        var fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [info_top_component_1.InfoTopComponent]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(info_top_component_1.InfoTopComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should be created', function () {
            expect(component).toBeTruthy();
        });
    });
});
//# sourceMappingURL=info-top.component.spec.js.map