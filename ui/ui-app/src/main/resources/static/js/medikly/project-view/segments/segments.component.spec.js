define(["require", "exports", "@angular/core/testing", "./segments.component"], function (require, exports, testing_1, segments_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('SegmentsComponent', function () {
        var component;
        var fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [segments_component_1.SegmentsComponent]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(segments_component_1.SegmentsComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should be created', function () {
            expect(component).toBeTruthy();
        });
    });
});
//# sourceMappingURL=segments.component.spec.js.map