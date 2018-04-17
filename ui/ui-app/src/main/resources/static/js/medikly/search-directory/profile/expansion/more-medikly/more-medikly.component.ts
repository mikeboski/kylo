import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-more-medikly-expansion',
  templateUrl: 'js/medikly/search-directory/profile/expansion/more-medikly/more-medikly.component.html'
})

export class MoreMediklyComponent {
  @Input('profile') profile: any;
}
