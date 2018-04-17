import { Directive, ElementRef } from '@angular/core';
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
    selector: 'app-card-top-actions',
    host: {'class': 'top-actions'},
})
export class AppCardTopActionsDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.position = 'absolute';
        el.nativeElement.style.textAlign = 'right';
        el.nativeElement.style.width = '100%';
        el.nativeElement.style.zIndex = '10';
        el.nativeElement.style.boxShadow = 'inset 0px 31px 29px -5px rgba(0,0,0,0.4)';
    }
}