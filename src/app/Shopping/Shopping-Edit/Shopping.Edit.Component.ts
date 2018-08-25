import {Component, EventEmitter, Output} from '@angular/core';
import {Ingredient} from '../../Ingredients/Ingredient';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: 'Shopping.Edit.Component.html'
})
export class ShoppingEditComponent {
    @Output() addIngredientsEvent = new EventEmitter<Ingredient>();
    constructor() {}

    addIngredients(ingredientName, ingredientAmount) {
        const ingredient = new Ingredient(ingredientName, ingredientAmount);
        this.addIngredientsEvent.emit(ingredient);
    }
}
