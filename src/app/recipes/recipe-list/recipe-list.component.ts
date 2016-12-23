import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
// import { RecipeItemComponent } from './recipe-item.component'
// import { RecipesComponent} from '../recipes.component'


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('1','2', 'http://www.w3schools.com/css/img_fjords.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    console.log(recipe)

    this.recipeSelected.emit(recipe)

  }

}
