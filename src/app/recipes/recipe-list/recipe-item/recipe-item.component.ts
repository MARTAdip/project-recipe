import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; // receiving data from outside (from the recipe-list)
  @Output() recipeSelected =  new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  onOpenRecipeDetail(){
    this.recipeSelected.emit();
  }
}
