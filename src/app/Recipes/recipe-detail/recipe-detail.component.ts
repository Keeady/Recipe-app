import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Recipe} from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
    @Output() somethingDoneEvent = new EventEmitter<string>();
    @Input() recipeDetails: Recipe;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  doSomething(data) {}
}
