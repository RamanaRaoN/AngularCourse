import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Recipeservice } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.scss']
})
/** recipe-details component*/
export class RecipeDetailsComponent implements OnInit {

  //@Input() recipe: Recipe;
    /** recipe-details ctor */
  recipe: Recipe;
  id: number;
    constructor(private recipeService:Recipeservice, private route : ActivatedRoute, private router:Router) {

  }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
       this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }
  addShoppingList() {
    this.recipeService.addRecipetoShoppingList(this.recipe.ingredients);
  }
  onEdit(id: number) {
    //console.log(id);
    //this.router.navigate(['../'+ id + '/edit'], { relativeTo: this.route });
    this.router.navigate(['../', this.id , 'edit'], { relativeTo: this.route });
  }
}
