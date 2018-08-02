import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './Shopping/ShoppingList.Component';
import { ShoppingItemComponent } from './Shopping/ShoppingItem.Component';
import { HeaderComponent } from './Header/Header.Component';
import { RecipesComponent } from './Recipes/Recipes.component';
import { RecipeListComponent } from './Recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Recipes/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './Shopping/Shopping-Edit/Shopping.Edit.Component';

@NgModule({
  declarations: [
    AppComponent,
      ShoppingListComponent,
      ShoppingItemComponent,
      HeaderComponent,
      RecipesComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      RecipeItemComponent,
      ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
