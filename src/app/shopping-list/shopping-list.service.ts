import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { Ingredient } from '../recipes/ingredient'

@Injectable()

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor(private http: Http) {}

  getItems() {
    this.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    )
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  storeData() {
    const body = JSON.stringify(this.items);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put('https://recipe-book-f0621.firebaseio.com/shopping-list.json', body, { headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipe-book-f0621.firebaseio.com/shopping-list.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Ingredient[]) => {
         this.items = data;
        }
     )
  }


}
