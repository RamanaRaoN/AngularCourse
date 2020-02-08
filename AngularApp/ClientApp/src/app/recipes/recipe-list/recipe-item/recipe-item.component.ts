import { Component, Input OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Recipeservice } from '../../recipe.service';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    //styleUrls: ['./recipe-item.component.scss']
})
/** recipe-item component*/
export class RecipeItemComponent implements OnInit {
  //@Input() recipeitemlist: { name: string, description: string, imagePath: string }
  @Input() recipeitemlist: Recipe
  @Input() index: number
  //@Output() itemselect = new EventEmitter<void>();
  //  /** recipe-item ctor */
  //constructor(private recipeservice: Recipeservice) {  }

  ngOnInit() {

  }
  //getItemDetails() {
  //  this.recipeservice.selectedRecipe.emit(this.recipeitemlist);
  //}
}
