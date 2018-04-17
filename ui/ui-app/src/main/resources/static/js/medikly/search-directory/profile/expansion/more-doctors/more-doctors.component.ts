import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-more-doctors-expansion',
  templateUrl: 'js/medikly/search-directory/profile/expansion/more-doctors/more-doctors.component.html'
})

export class MoreDoctorsComponent {
  @Input('profile') profile: any;
}
