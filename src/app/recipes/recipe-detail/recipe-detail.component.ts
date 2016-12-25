import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { AngularFire, AuthProviders, AuthMethods ,FirebaseAuthState,FirebaseAuth} from 'angularfire2';


import { Recipe } from '../recipe'
import { ShoppingListService } from '../../shopping-list/shopping-list.service'
import { RecipeService } from '../recipe.service'
@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe:Recipe;
  private recipeIndex:number;
  private subscription: Subscription;
  user;

  constructor(private sls:ShoppingListService,
              private router:Router,
              private route:ActivatedRoute,
              private recipesService:RecipeService,private recipeService: RecipeService, public auth:FirebaseAuth) {
          this.auth.subscribe(state => {
          if(state != null){
          this.user = state.auth;
         } else {
           this.user = null;
         }
        })

  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
    this.recipesService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    )

  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }
}

