import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-key-stats',
  templateUrl: 'js/medikly/shared/profile/profile-key-stats/profile-key-stats.component.html',
  styleUrls: ['js/medikly/shared/profile/profile-key-stats/profile-key-stats.component.css']
})
export class ProfileKeyStatsComponent implements OnInit {

  @Input('profile') profile: any;

  constructor() { }

  ngOnInit() {
  }

}
