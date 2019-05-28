"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var recipe_model_1 = require("./recipe.model");
var ingredient_model_1 = require("../shared/ingredient.model");
var Recipeservice = /** @class */ (function () {
    function Recipeservice() {
        this.selectedRecipe = new core_1.EventEmitter();
        this.recipe = [
            new recipe_model_1.Recipe('1', 'Description1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJ2tY1Yb7tN6EV4iz5dYue7RPvDNsoNxV--AAYnIAV8h2K4u4', [
                new ingredient_model_1.Ingredient('chiken', 1),
                new ingredient_model_1.Ingredient('cornflowr', 1)
            ]),
            new recipe_model_1.Recipe('2', 'Description2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJ2tY1Yb7tN6EV4iz5dYue7RPvDNsoNxV--AAYnIAV8h2K4u4', [
                new ingredient_model_1.Ingredient('meat', 1),
                new ingredient_model_1.Ingredient('Masala Powder', 1)
            ]),
            new recipe_model_1.Recipe('3', 'Description3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJ2tY1Yb7tN6EV4iz5dYue7RPvDNsoNxV--AAYnIAV8h2K4u4', [
                new ingredient_model_1.Ingredient('Vegitables', 2),
                new ingredient_model_1.Ingredient('Neem', 2)
            ])
        ];
    }
    Recipeservice.prototype.gerRecipeList = function () {
        return this.recipe.slice();
    };
    Recipeservice.prototype.addRecipetoShoppingList = function (ingredient) {
    };
    return Recipeservice;
}());
exports.Recipeservice = Recipeservice;
//# sourceMappingURL=recipe.service.js.map