import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';
import { Subscription } from 'rxjs/Subscription';



@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
/** shopping-list component*/
export class ShoppingListComponent implements OnInit, OnDestroy  {

  unsubcription: Subscription;
  ingredients: Ingredient[] = [];
    /** shopping-list ctor */
    constructor(private shoppinglistService:ShoppingListService) {
      
  }
  ngOnInit() {
    this.ingredients = this.shoppinglistService.getingredients();
    this.unsubcription= this.shoppinglistService.ingredientChange.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    );
  }

  ngOnDestroy() {
    this.unsubcription.unsubscribe();
  }

  //ingredientAdded(ingredientData: Ingredient) {
  //  this.ingredients.push(ingredientData);
  //}
}
