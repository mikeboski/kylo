import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
//import {style, animate, AnimationBuilder, AnimationPlayer} from '@angular/animations';
import {Subscription} from 'rxjs/Subscription';
import { StepState } from '@covalent/core';

@Component({
  selector: 'info-panel',
  templateUrl: 'js/medikly/project-view/main/info-panel/info-panel.component.html',
  styleUrls: ['js/medikly/project-view/main/info-panel/info-panel.component.css']
})
export class InfoPanelComponent implements OnInit, OnDestroy {
  @ViewChild('openButton') openButton;
  @ViewChild('panel') panel;

  //public player: AnimationPlayer;

  constructor() {
  }

  ngOnInit() {
  }

  closeBar() {
/*    this.player =
      this.animationBuilder
        .build([
          style({transform: 'translate3d(0,0,0)'}),
          animate('400ms ease', style({transform: 'translate3d(100%,0,0)'}))
        ]).create(this.panel.nativeElement);
    this.player.play();*/
  }

  openBar() {
/*    this.player =
      this.animationBuilder
        .build([
          style({transform: 'translate3d(100%,0,0)'}),
          animate('400ms ease', style({transform: 'translate3d(0,0,0)'}))
        ]).create(this.panel.nativeElement);
    this.player.play();*/
  }

  ngOnDestroy() {

  }

  //Steps
  activeDeactiveStep1Msg: string = 'No select/deselect detected yet';
  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Complete;
  disabled: boolean = false;

  toggleRequiredStep2(): void {
    this.stateStep2 = (this.stateStep2 === StepState.Required ? StepState.None : StepState.Required);
  }

  toggleCompleteStep3(): void {
    this.stateStep3 = (this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete);
  }

  activeStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }

  deactiveStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }
}
