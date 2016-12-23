import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './recipe';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
