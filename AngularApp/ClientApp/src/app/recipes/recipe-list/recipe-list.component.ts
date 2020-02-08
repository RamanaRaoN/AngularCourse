import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Recipeservice } from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
   // styleUrls: ['./recipe-list.component.scss']
})
/** Recipe-list component*/
export class RecipeListComponent implements OnInit {

 //@Output() recipewasSelected = new EventEmitter<Recipe>();
  recipe: Recipe[];
    /** Recipe-list ctor */
    constructor(private recipeservice:Recipeservice) {

  }

  ngOnInit() {
    this.recipe = this.recipeservice.gerRecipeList();
  }

  //onSelectrecipe(selectedRecipe:Recipe) {
  //  //this.recipewasSelected.emit(selectedRecipe);
  //  this.recipeservice.selectedRecipe.emit(selectedRecipe);
  //}
}
