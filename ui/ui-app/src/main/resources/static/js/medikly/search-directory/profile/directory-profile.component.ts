import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {environment} from '../../environments/environment';

@Component({
    selector: 'app-directory-profile',
    templateUrl: 'js/medikly/search-directory/profile/directory-profile.component.html',
    styleUrls: ['js/medikly/search-directory/profile/directory-profile.component.css']
})

export class DirectoryProfileComponent implements OnInit {
    @Input('profile') profile: any;
    @Output('onClosed') onClosed = new EventEmitter<boolean>();
    @Output('addProviderCompare') addProviderCompare: EventEmitter<any> = new EventEmitter<any>();
    @Output('follow') follow: EventEmitter<any> = new EventEmitter<any>();

    tabWidth:number = 300;
    images: any[] = [];
    num = 1
    googleApiKey: string = environment.googleMapApiKey;

    ngOnInit(): void {
        const elemContent = <HTMLElement>document.querySelector('#directory-profile');
        this.tabWidth = elemContent.offsetWidth;
    }

    toggleScreenfull(): void {
        const elemContent = <HTMLElement>document.querySelector('app-directory-profile');
        // if (screenfull.enabled) {
        //     screenfull.toggle();
        // }
    }
    constructor() {
        for (this.num; this.num <= 9; this.num += 1) {
            this.images.push(this.num);
        }
    }

    close(agreed: boolean) {
        this.onClosed.emit(agreed);
        this.profile = null;
    }

  //Compare
  throwEventProviderCompare(provider) {
    this.addProviderCompare.emit(provider);
  }

  //Follow
  throwEventFollow(provider) {
    this.follow.emit(provider);
  }
}
