import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {DOCTORS} from '../data/doctors';

@Component({
    selector: 'app-directory-listing',
    templateUrl: 'js/medikly/search-directory/listing/directory-listing.component.html',
    styleUrls: ['js/medikly/search-directory/listing/directory-listing.component.css']
})

export class DirectoryListingComponent implements OnInit {
    @Input('category') category: string;
    @Input('selected') selected:any;
    @Input('providers') providers: any;
    @Input('following') following: any;
    @Input('providersCompare') providersCompare;
    @Output('addProviderCompare') addProviderCompare: EventEmitter<any> = new EventEmitter<any>();
    @Output('follow') follow: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    capitalize(value: any): any {
        value = value.replace('  ', ' ');
        if (value) {
            let w = '';
            if (value.split(' ').length > 0) {
                value.split(' ').forEach(word => {
                    w += word.charAt(0).toUpperCase() + word.toString().substr(1, word.length).toLowerCase() + ' '
                });
            } else {
                w = value.charAt(0).toUpperCase() + value.toString().substr(1, value.length).toLowerCase();
            }
            return w;
        }
        return value;
    }
    ngOnInit() {
        //this.getProviders();
    }

    getProviders() {
        this.fetchProviders().then(providers => {
            this.providers = providers;
            for (let i in this.providers) {
                var mKey = parseInt(i) + 1;
                this.providers[i].basic.first_name = this.capitalize(this.providers[i].basic.first_name).trim();
                this.providers[i].basic.last_name = this.capitalize(this.providers[i].basic.last_name).trim();
                this.providers[i].addresses[0].city = this.capitalize(this.providers[i].addresses[0].city).trim();
                this.providers[i].avatar = `assets/images/providers/${this.providers[i].basic.gender}/${mKey}.png`;
                this.providers[i].key = mKey;
            }
        });
    }

    fetchProviders(): Promise<any[]> {
        return Promise.resolve(DOCTORS);
    }
    selectItem(selected): void {
        this.selected = selected;
    }


  //Compare
  addToProvidersCompare(provider){
    this.providersCompare.push(provider);
  }
  throwEventProviderCompare(provider) {
    this.addProviderCompare.emit(provider);
  }

  //Follow
  throwEventFollow(provider) {
    this.follow.emit(provider);
  }
}
