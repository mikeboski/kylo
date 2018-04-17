import {Component, OnInit, Output, HostListener, EventEmitter} from '@angular/core';
import {MatGridList} from '@angular/material';

@Component({
    selector: 'app-modal-templates-gallery',
    templateUrl: 'js/medikly/shared/listing/modal/modal-templates-gallery.component.html',
    styleUrls: ['js/medikly/shared/listing/modal/modal-templates-gallery.component.css'],
    providers: [MatGridList],
})
export class ModalTemplatesGalleryComponent implements OnInit {
    products: any[] = [];
    num = 1;
    @Output('openProject') openProject: EventEmitter<any> = new EventEmitter<any>();

    constructor() {

    }


    addProducts(i) {
        this.products.push({
            id: i,
            price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            status: ['', '', '', ''][Math.floor(Math.random() * 4)],
            discounted: ['', '', '', ''][Math.floor(Math.random() * 4)],
            discount: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            name: [
                'Blouse',
                'Casual Shirt',
                'Plaid Shirt',
                'Long Sleeve',
                'Denim Jacked',
                'Fur Coat',
                'Crop Top',
                'Stripe Tee'][Math.floor(Math.random() * 8)],
            description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
        });
    }

    setTemplates() {

        let maxItems = 5;
        this.products = [];

        for (this.num; this.num <= maxItems; this.num += 1) {
            this.addProducts(this.num);
        }
    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {

    }

    ngOnInit() {
        this.setTemplates();
    }

    openDialogNewProject(){
        this.openProject.emit();
    }
}
