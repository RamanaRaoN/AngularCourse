import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
  //  styleUrls: ['./shopping-edit.component.scss']
})
/** shopping-edit component*/
export class ShoppingEditComponent {


  /** shopping-edit ctor */
  constructor(private shoppinglistService: ShoppingListService) {

  }

  // create coustom event using EventEmitter
  //@Output() newingredients = new EventEmitter<Ingredient>();

  // using viewchild get data from localReference
  @ViewChild('nameInput') inputName: ElementRef;
  @ViewChild('amountInput') inputAmount: ElementRef;

  addIngredient() {
    let recipeName = this.inputName.nativeElement.value;
    let recipeAmount = this.inputAmount.nativeElement.value;
    var i = new Ingredient(recipeName, recipeAmount);
    this.shoppinglistService.ingredientAdded(i);
  }

  //addIngredient(ingredientName: string, amount: number) {
  // // console.log(ingredientName.value + " " + amount.value);
  //  let recipeName = this.inputName.nativeElement.value;
  //  let recipeAmount = this.inputAmount.nativeElement.value;
  //  //console.log(recipeName, recipeAmount);
  //  //using local reference
  //  var i = new Ingredient(ingredientName.value, amount.value);

  //  // using local ref and viewchild
  //  // var i = new Ingredient(recipeName,recipeAmount);
    
  //  this.newingredients.emit(i);
  //}
}
