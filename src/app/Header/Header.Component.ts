import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() clickedroute = new EventEmitter<string>();
    constructor() {}

    gotoshopping() {
        this.clickedroute.emit('shopping');
    }

    gotorecipe() {
        this.clickedroute.emit('recipe');
    }
}
