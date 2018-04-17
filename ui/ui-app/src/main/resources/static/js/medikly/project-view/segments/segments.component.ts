import {Component, OnInit, OnDestroy} from '@angular/core';
//import {ToolbarService} from '../../core/toolbar/toolbar.service';
import {DisplayDocumentsService} from '../../shared/display-documents/display-documents.service';
@Component({
    selector: 'app-segments',
    templateUrl: 'js/medikly/project-view/segments/segments.component.html',
    styleUrls: ['js/medikly/project-view/segments/segments.component.scss']
})
export class SegmentsComponent implements OnInit, OnDestroy {

    titleMode = 'Today';
    products: any[] = [];
    num = 1;

    constructor(private dds: DisplayDocumentsService) {
        for (this.num; this.num <= 20; this.num += 1) {
            this.addProducts(this.num);
        }

        this.dds.setDocuments(this.products);
    }


    addProducts(i) {
        this.products.push({
            id: i,
            price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
            discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
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

    ngOnInit() {
        //this.ts.setToolbarColor('dark-blue');
        //this.ts.setSearchBarVisible(false);
        //this.ts.setBackRoute('/projects/home/recent');
    }

    ngOnDestroy() {
        //this.ts.restoreToolbarColor();
        //this.ts.setBackRoute('');
        //this.ts.setSearchBarVisible(true);
    }

}
