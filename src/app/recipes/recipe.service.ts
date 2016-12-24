import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';


import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(private http: Http) {}

  getRecipes() {
    this.fetchData()
    return this.recipes;
  }
  
  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
    console.log('aaaa')
        console.log(this.recipes)
        this.storeData();


  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {

    const body = JSON.stringify(this.recipes);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put('https://recipe-book-f0621.firebaseio.com/recipe.json', body, { headers: headers});
    
  }

  fetchData() {
    return this.http.get('https://recipe-book-f0621.firebaseio.com/recipe.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
         this.recipes = data;
         this.recipesChanged.emit(this.recipes);
        }
     )

  }
}
