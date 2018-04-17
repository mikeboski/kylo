import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact-expansion',
  templateUrl: 'js/medikly/search-directory/profile/expansion/contact/contact.component.html'
})

export class ContactComponent {
  @Input('profile') profile: any;
}
