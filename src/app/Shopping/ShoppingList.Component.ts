import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './Template/shopping.list.component.html',
    styleUrls: ['./scss/shopping.list.component.scss']
})
export class ShoppingListComponent {
    shoppingList: Item[];
    constructor() {
        this.shoppingList = [new Item('potato', 1, 'lb')];
    }
}
