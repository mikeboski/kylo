import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-about-expansion',
  templateUrl: 'js/medikly/search-directory/profile/expansion/about/about.component.html'
})

export class AboutComponent {
  @Input('profile') profile: any;
}
