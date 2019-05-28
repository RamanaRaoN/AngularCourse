//import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService {

  ingredientChange = new Subject<Ingredient[]>(); 
 private ingredients: Ingredient[] = [
    new Ingredient('ingredient1', 20),
    new Ingredient('ingredient2', 30),
    new Ingredient('ingredient3', 40)
  ];

  getingredients() {
     return this.ingredients.slice();
  }
  ingredientAdded(ingredientData: Ingredient) {
    this.ingredients.push(ingredientData);
   // console.log(this.ingredients);
    this.ingredientChange.next(this.ingredients.slice());
  }

  addIngredientsRecipetoShoppingList(ingredients:Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChange.next(this.ingredients.slice());
  }
}
