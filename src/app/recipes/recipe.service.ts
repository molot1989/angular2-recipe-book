import { Injectable } from '@angular/core';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('1','1111', 'http://www.w3schools.com/css/img_fjords.jpg' ,[]),
    new Recipe('2','2222', 'http://www.w3schools.com/css/img_fjords.jpg', []),
    new Recipe('3','33333', 'http://www.w3schools.com/css/img_fjords.jpg', [])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
