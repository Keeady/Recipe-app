import { Component } from '@angular/core';
import { Ingredient } from '../Ingredients/Ingredient';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './Template/shopping.list.component.html',
    styleUrls: ['./scss/shopping.list.component.scss']
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('apple', 10),
        new Ingredient('tomato', 5)
    ];
    constructor() {}

    /**
     * @param {Ingredient} ingredient
     */
    ingredientsAddedHandler(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}
