/**
 * Created by development on 19/7/17.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MockDoctor} from './data/profile';

export class ArrayTypes {
    type: string;
    value: string;
};

@Component({
    selector: 'app-profile',
    templateUrl: 'js/medikly/profile/profile.component.html',
    styleUrls: ['js/medikly/profile/profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

    userForm: FormGroup;
    disabled: boolean = false;
    chipAddition: boolean = true;
    chipRemoval: boolean = true;

    profile = MockDoctor;

    strings: string[] = [
        'oncologist',
        'hospital',
        'medical training',
        'doctor',
        'general practitioner'
    ];

    filteredStrings: string[];
    stringsModel: string[] = this.strings.slice(0, 6);

    constructor(private fb: FormBuilder) {
        this.createUserForm();
    }

    ngOnInit() {
        this.filterStrings('');
    }

    ngOnDestroy() {
    }

    createUserForm() {
        this.userForm = this.fb.group({
            name: ['Gerald Morris', Validators.required],
            description: ['Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper'],
            phones: this.fb.array([]),
            emails: this.fb.array([]),
            addresses: this.fb.array([]),
            websites: this.fb.array([]),
            socials: this.fb.array([]),
        });

        this.addNewEmail('WorkEmail', 'gerald@morris.com');
        this.addNewPhone('WorkPhone', '+1 123 456');
        this.addNewAddress('WorkAddress', 'PO Box 4668, New York, NY');
        this.addNewWebsite('WorkWebsite', 'http://www.dundermifflin.com/index.shtml');
        this.addNewSocial('Facebook', 'http://www.dundermifflin.com/index.shtml');
        this.addNewSocial('Twitter', 'http://www.dundermifflin.com/index.shtml');
        this.addNewSocial('Linkedin', 'http://www.dundermifflin.com/index.shtml');

    }

    isOver(): boolean {
        return window.matchMedia(`(max-width: 960px)`).matches;
    }

    addNewPhone(type, value) {
        const fg = this.fb.group({
            type: [type, Validators.required],
            value: [value, Validators.required]
        });
        // add address to the list
        const control = <FormArray>this.userForm.controls['phones'];
        control.push(fg);
    }

    addNewEmail(type, value) {
        const fg = this.fb.group({
            type: [type, Validators.required],
            value: [value, Validators.compose([Validators.email, Validators.required])]
        });
        // add address to the list
        const control = <FormArray>this.userForm.controls['emails'];
        control.push(fg);
    }

    addNewAddress(type, value) {
        const fg = this.fb.group({
            type: [type, Validators.required],
            value: [value, Validators.required]
        });
        // add address to the list
        const control = <FormArray>this.userForm.controls['addresses'];
        control.push(fg);
    }

    addNewWebsite(type, value) {
        const fg = this.fb.group({
            type: [type, Validators.required],
            value: [value, Validators.required]
        });
        // add address to the list
        const control = <FormArray>this.userForm.controls['websites'];
        control.push(fg);
    }

    addNewSocial(type, value) {
        const fg = this.fb.group({
            type: [type, Validators.required],
            value: [value, Validators.required]
        });
        // add address to the list
        const control = <FormArray>this.userForm.controls['socials'];
        control.push(fg);
    }

    removeArrayItem(type, key) {
        // remove address from the list
        const control = <FormArray>this.userForm.controls[type];
        control.removeAt(key);
    }

    filterStrings(value: string): void {
        this.filteredStrings = this.strings.filter((item: any) => {
            if (value) {
                return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
            } else {
                return false;
            }
        }).filter((filteredItem: any) => {
            return this.stringsModel ? this.stringsModel.indexOf(filteredItem) < 0 : true;
        });
    }
}
