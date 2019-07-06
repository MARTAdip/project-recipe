import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test', 'test', 'test', 'test','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lasagna_romagnola.jpg/1200px-Lasagna_romagnola.jpg', )
    // {
    //   id: 'r1',
    //   name: 'Lasagna',
    //   imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lasagna_romagnola.jpg/1200px-Lasagna_romagnola.jpg',
    //   ingredients: ['Egg Pasta', 'Meat', 'Besciamella', 'Parmigiano']
    // },
    // {
    //   id: 'r2',
    //   name: 'Pappa al Pomodoro',
    //   imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pappa_al_pomodoro_01.jpg/1200px-Pappa_al_pomodoro_01.jpg',
    //   ingredients: ['Dry Bread', 'Fresh Tomatoes', 'Basil']
    // },
    // {
    //   id: 'r3',
    //   name: 'Zuppa di Fagioli',
    //   imagePath: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Annibale_Carracci_-_The_Beaneater_-_WGA04408.jpg',
    //   ingredients: ['Beans', 'Tomato Souce', 'Garlic', 'Onion', 'Sellery']
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

}
