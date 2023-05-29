import { Injectable } from '@angular/core';
import { Sample_Foods, sample_tags } from '../data';
import { Food } from '../food';
import { Tag } from '../tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getAll(): Food[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getAll():Food[]{
    return Sample_Foods

  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags():Tag[]{
    return sample_tags
  }
  getAllFoodByTag(tag:string):Food[]{
    return tag=='All'?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag))
  }
  getFoodById(foodId:string):Food{
    return this.getAll().find(food=>food.id==foodId)??new Food()
  }
}
