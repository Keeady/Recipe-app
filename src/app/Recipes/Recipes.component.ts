import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Recipe} from './Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './Recipes.component.html',
  styleUrls: ['./Recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnChanges {
    @Input()  surname;
    recipeElement: Recipe;
    constructor() { }

    ngOnInit() {}
    ngOnChanges() {}
    recipeElementOnClick(data) {
        this.recipeElement = data;
    }
}
