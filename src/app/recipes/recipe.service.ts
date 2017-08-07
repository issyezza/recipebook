import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Rosemary & garlic lamb shoulder',
               'Cooking a whole lamb shoulder is the perfect way to feed a crowd at Easter. The beauty of slow-cooking big joints like this is that you end up with lots of lovely leftovers to shred up and use up in salads, burritos, pastas – you name it.',
               'http://gbc.blob.core.windows.net/media/img25316.jpg',
                [
                  new Ingredient('Lamb shoulder', 1),
                  new Ingredient('Garlic', 1),
                  new Ingredient('English mustard', 1),
                ]),
    new Recipe('Moroccan-style lamb burgers',
               'Lamb burgers make a great change from beef and the spicy rub gives full-on Moroccan flavour',
               'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18123725/051130018-01-moroccan-chicken-burger-recipe-thumb16x9.jpg',
                [
                  new Ingredient('lamb shoulder , minced', 1),
                  new Ingredient('harissa paste', 1)
                ]),
  ];

  constructor (private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
