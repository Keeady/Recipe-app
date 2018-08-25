import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeElementClickEvent = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe(
            'test recipe',
            'a very basic recipe',
            'https://upload.wikimedia.org/wikipedia/commons/5/56/Indian-Salsa-dip-mother%27s-recipe.jpg'
        ),
        new Recipe(
            'chicken recipe',
            'a very good chicken recipe',
            'https://upload.wikimedia.org/wikipedia/commons/5/56/Indian-Salsa-dip-mother%27s-recipe.jpg'
        )

    ];
  constructor() { }

  ngOnInit() {}

    recipeElementOnClick(recipe) {
        this.recipeElementClickEvent.emit(recipe);
    }
}
