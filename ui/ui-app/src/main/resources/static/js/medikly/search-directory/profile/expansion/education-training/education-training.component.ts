import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-education-training-expansion',
  templateUrl: 'js/medikly/search-directory/profile/expansion/education-training/education-training.component.html'
})

export class EducationTrainingComponent {
  @Input('profile') profile: any;
}
