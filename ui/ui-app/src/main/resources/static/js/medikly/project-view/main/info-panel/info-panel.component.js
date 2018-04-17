var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@covalent/core"], function (require, exports, core_1, core_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InfoPanelComponent = /** @class */ (function () {
        //public player: AnimationPlayer;
        function InfoPanelComponent() {
            //Steps
            this.activeDeactiveStep1Msg = 'No select/deselect detected yet';
            this.stateStep2 = core_2.StepState.Required;
            this.stateStep3 = core_2.StepState.Complete;
            this.disabled = false;
        }
        InfoPanelComponent.prototype.ngOnInit = function () {
        };
        InfoPanelComponent.prototype.closeBar = function () {
            /*    this.player =
                  this.animationBuilder
                    .build([
                      style({transform: 'translate3d(0,0,0)'}),
                      animate('400ms ease', style({transform: 'translate3d(100%,0,0)'}))
                    ]).create(this.panel.nativeElement);
                this.player.play();*/
        };
        InfoPanelComponent.prototype.openBar = function () {
            /*    this.player =
                  this.animationBuilder
                    .build([
                      style({transform: 'translate3d(100%,0,0)'}),
                      animate('400ms ease', style({transform: 'translate3d(0,0,0)'}))
                    ]).create(this.panel.nativeElement);
                this.player.play();*/
        };
        InfoPanelComponent.prototype.ngOnDestroy = function () {
        };
        InfoPanelComponent.prototype.toggleRequiredStep2 = function () {
            this.stateStep2 = (this.stateStep2 === core_2.StepState.Required ? core_2.StepState.None : core_2.StepState.Required);
        };
        InfoPanelComponent.prototype.toggleCompleteStep3 = function () {
            this.stateStep3 = (this.stateStep3 === core_2.StepState.Complete ? core_2.StepState.None : core_2.StepState.Complete);
        };
        InfoPanelComponent.prototype.activeStep1Event = function () {
            this.activeDeactiveStep1Msg = 'Active event emitted.';
        };
        InfoPanelComponent.prototype.deactiveStep1Event = function () {
            this.activeDeactiveStep1Msg = 'Deactive event emitted.';
        };
        __decorate([
            core_1.ViewChild('openButton'),
            __metadata("design:type", Object)
        ], InfoPanelComponent.prototype, "openButton", void 0);
        __decorate([
            core_1.ViewChild('panel'),
            __metadata("design:type", Object)
        ], InfoPanelComponent.prototype, "panel", void 0);
        InfoPanelComponent = __decorate([
            core_1.Component({
                selector: 'info-panel',
                templateUrl: 'js/medikly/project-view/main/info-panel/info-panel.component.html',
                styleUrls: ['js/medikly/project-view/main/info-panel/info-panel.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], InfoPanelComponent);
        return InfoPanelComponent;
    }());
    exports.InfoPanelComponent = InfoPanelComponent;
});
//# sourceMappingURL=info-panel.component.js.map