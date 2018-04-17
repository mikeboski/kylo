define(["require", "exports", "@angular/core/testing", "./card-layout.component"], function (require, exports, testing_1, card_layout_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('CardLayoutComponent', function () {
        var component;
        var fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [card_layout_component_1.CardLayoutComponent]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(card_layout_component_1.CardLayoutComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should be created', function () {
            expect(component).toBeTruthy();
        });
    });
});
//# sourceMappingURL=card-layout.component.spec.js.map