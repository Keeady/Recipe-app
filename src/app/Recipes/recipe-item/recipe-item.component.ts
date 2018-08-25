import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
    @Output() recipeElementClickEvent = new EventEmitter<Recipe>();
    @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {}
}
