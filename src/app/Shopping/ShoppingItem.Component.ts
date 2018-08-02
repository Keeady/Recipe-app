import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
    selector: 'app-shopping-item',
    templateUrl: './Template/shopping.item.component.html',
    styleUrls: ['./scss/shopping.item.component.scss']
})
export class ShoppingItemComponent {
    item: Item;
    constructor() { }
}
