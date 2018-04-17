import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-prescribing-record-expansion',
  templateUrl: 'js/medikly/search-directory/profile/expansion/prescribing-record/prescribing-record.component.html'
})

export class PrescribingRecordComponent {
  @Input('profile') profile: any;
}
