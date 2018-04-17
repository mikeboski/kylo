import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-professional-information-expansion',
  templateUrl: 'js/medikly/search-directory/profile/expansion/professional-information/professional-information.component.html'
})

export class ProfessionalInformationComponent {
  @Input('profile') profile: any;
}
