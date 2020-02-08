import { Component, OnInit } from '@angular/core';
import { Recipeservice } from './recipe.service';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
 // styleUrls: ['./recipes.component.scss'],
    providers:[Recipeservice]
})
/** Recipes component*/
export class RecipesComponent  {
    /** Recipes ctor */
  //recipeSelected: Recipe;
    constructor(/*private recipeService:Recipeservice*/) {

  }

  ngOnInit() {
    //this.recipeService.selectedRecipe.subscribe(
    //  (recipe: Recipe) => {
    //    this.recipeSelected = recipe;
    //  });
  }
}
