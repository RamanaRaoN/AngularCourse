"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { EventEmitter } from "@angular/core";
var Subject_1 = require("rxjs/Subject");
var ingredient_model_1 = require("../shared/ingredient.model");
var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredientChange = new Subject_1.Subject();
        this.ingredients = [
            new ingredient_model_1.Ingredient('ingredient1', 20),
            new ingredient_model_1.Ingredient('ingredient2', 30),
            new ingredient_model_1.Ingredient('ingredient3', 40)
        ];
    }
    ShoppingListService.prototype.getingredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.ingredientAdded = function (ingredientData) {
        this.ingredients.push(ingredientData);
        // console.log(this.ingredients);
        this.ingredientChange.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredientsRecipetoShoppingList = function (ingredients) {
        var _a;
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientChange.next(this.ingredients.slice());
    };
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;
//# sourceMappingURL=shoppingList.service.js.map