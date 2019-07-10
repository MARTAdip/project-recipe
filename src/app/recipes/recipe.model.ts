


export class Recipe {
  public id: string;
  public name: string;
  public ingredients: any;
  public description: string;
  public imagePath: string;

  constructor(id: string, name: string, ingredients:any, description: string, imagePath: string){
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.description = description;
    this.imagePath = imagePath;
  }
}
