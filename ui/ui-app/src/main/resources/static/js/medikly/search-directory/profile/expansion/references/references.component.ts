import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-references-expansion',
  templateUrl: 'js/medikly/search-directory/profile/expansion/references/references.component.html'
})

export class ReferencesComponent {
  @Input('profile') profile: any;
}

