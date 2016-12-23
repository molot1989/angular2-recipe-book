import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe'
// import { RecipesComponent} from '../recipes.component'

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
