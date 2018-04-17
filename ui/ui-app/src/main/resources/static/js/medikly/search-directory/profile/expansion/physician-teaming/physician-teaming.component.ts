import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-physician-teaming-expansion',
  templateUrl: 'js/medikly/search-directory/profile/expansion/physician-teaming/physician-teaming.component.html'
})

export class PhysicianTeamingComponent {
  @Input('profile') profile: any;
}
