import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-open-payments-expansion',
  templateUrl: 'js/medikly/search-directory/profile/expansion/open-payments/open-payments.component.html'
})

export class OpenPaymentsComponent {
  @Input('profile') profile: any;
}
