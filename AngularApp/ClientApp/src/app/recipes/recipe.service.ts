import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
@Injectable()
export class Recipeservice {

  constructor(private slService:ShoppingListService) { }
  //selectedRecipe = new EventEmitter<Recipe>();

  private recipe: Recipe[] = [
    new Recipe(
      '1',
      'Description1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJ2tY1Yb7tN6EV4iz5dYue7RPvDNsoNxV--AAYnIAV8h2K4u4',
      [
        new Ingredient('chiken', 1),
        new Ingredient('cornflowr',1)
      ]
    ),
    new Recipe(
      '2',
      'Description2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJ2tY1Yb7tN6EV4iz5dYue7RPvDNsoNxV--AAYnIAV8h2K4u4',
      [
        new Ingredient('meat', 1),
        new Ingredient('Masala Powder', 1)
      ]

    ),
    new Recipe(
      '3',
      'Description3',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJ2tY1Yb7tN6EV4iz5dYue7RPvDNsoNxV--AAYnIAV8h2K4u4',
      [
        new Ingredient('Vegitables', 2),
        new Ingredient('Neem', 2)
      ]
    )
  ];

  gerRecipeList() {
    return this.recipe.slice();
  }

  getRecipe(index: number) {
    return this.recipe[index];
  }
  addRecipetoShoppingList(ingredient:Ingredient[]) {
    this.slService.addIngredientsRecipetoShoppingList(ingredient);
  }
}
