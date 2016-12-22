import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component'


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe = new Recipe('1','2', 'http://www.w3schools.com/css/img_fjords.jpg');

  constructor() { }

  ngOnInit() {
  }

}