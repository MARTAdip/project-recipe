import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')    // {
    //   id: 'r1',
    //   name: 'Lasagna',
    //   imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lasagna_romagnola.jpg/1200px-Lasagna_romagnola.jpg',
    //   description: "Le lasagne al forno sono costituite da una sfoglia di pasta madre di, oggi quasi sempre pasta all'uovo, tagliata in fogli grossolanamente rettangolari (losanghe), dette lasagna le quali, una volta bollite e scolate, vengono disposte in una sequenza variabile di strati, ognuno dei quali separato da una farcitura che varia in relazione alle diverse tradizioni locali.",
    //   ingredients: ['Egg Pasta', 'Meat', 'Besciamella', 'Parmigiano']
    // },
    // {
    //   id: 'r2',
    //   name: 'Pappa al Pomodoro',
    //   imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pappa_al_pomodoro_01.jpg/1200px-Pappa_al_pomodoro_01.jpg',
    //   description: "La pappa col pomodoro è un piatto povero della cucina toscana, più precisamente fiorentina",
    //   ingredients: ['Dry Bread', 'Fresh Tomatoes', 'Basil']
    // },
    // {
    //   id: 'r3',
    //   name: 'Zuppa di Fagioli',
    //   imagePath: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Annibale_Carracci_-_The_Beaneater_-_WGA04408.jpg',
    //   description: "La zuppa di fagioli è una tipica ricetta povera tradizionale italiana a base di fagioli. Esistono diverse varianti di questo piatto, che variano di regione in regione.",
    //   ingredients: ['Beans', 'Tomato Souce', 'Garlic', 'Onion', 'Sellery']
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
