import { Component, OnInit, Output, Input } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods ,FirebaseAuthState,FirebaseAuth} from 'angularfire2';

import { Recipe } from '../recipe';
 import { RecipeService } from '../recipe.service';
 import { User } from '../../auth/user'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  @Output() recipes: Recipe[] = [];
  user;
  constructor(private recipeService: RecipeService, public auth:FirebaseAuth) {
        this.auth.subscribe(state => {
          if(state != null){
          this.user = state.auth;
         } else {
           this.user = null;
         }
        })
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
   }

}
