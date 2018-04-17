import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-common-conditions-expansion',
  templateUrl: 'js/medikly/search-directory/profile/expansion/common-conditions/common-conditions.component.html'
})

export class CommonConditionsComponent {
  @Input('profile') profile: any;
}
