/**
 * Created by development on 27/7/17.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {DOCTORS} from '../search-directory/data/doctors';
import {UIRouter} from "@uirouter/angular";

@Component({
    selector: 'app-compare',
    templateUrl: 'js/medikly/compare/compare.component.html',
    styleUrls: ['js/medikly/compare/compare.component.css']
})

export class CompareComponent implements OnInit, OnDestroy {

    doctors: any = [];
    allDoctors: any = [];
    parameter: string;

    constructor(private uiRouter:UIRouter) {
        this.getProviders();
        /*ts.setTopSectionTitle('Compare');
         ts.setToolbarColor('purple');*/
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    getProviders() {
        this.fetchProviders().then(providers => {
            this.allDoctors = providers;
            for (let i in this.allDoctors) {
                var mKey = parseInt(i) + 1;
                this.allDoctors[i].basic.first_name = this.capitalize(this.allDoctors[i].basic.first_name).trim();
                this.allDoctors[i].basic.last_name = this.capitalize(this.allDoctors[i].basic.last_name).trim();
                this.allDoctors[i].addresses[0].city = this.capitalize(this.allDoctors[i].addresses[0].city).trim();
                this.allDoctors[i].avatar = `assets/medikly_theme/images/providers/${this.allDoctors[i].basic.gender}/${mKey}.png`;
                this.allDoctors[i].key = mKey;
            }
            this.filterDoctors();
        });
    }

    filterDoctors() {
        let parameter = this.uiRouter.globals.params.ids;
        /*    this.parameter = this.route.snapshot.params['ids'];*/
        let ids = parameter.split("-");

        for (let id of ids) {
            this.doctors.push(this.allDoctors[+id - 1]);
        }
    };

    capitalize(value: any): any {
        value = value.replace('  ', ' ');
        if (value) {
            let w = '';
            let word:any = ''; 
            if (value.split(' ').length > 0) {
                value.split(' ').forEach((word:any) => {
                    w += word.charAt(0).toUpperCase() + word.toString().substr(1, word.length).toLowerCase() + ' '
                });
            } else {
                w = value.charAt(0).toUpperCase() + value.toString().substr(1, value.length).toLowerCase();
            }
            return w;
        }
        return value;
    }

    fetchProviders(): Promise<any[]> {
        return Promise.resolve(DOCTORS);
    }
}
