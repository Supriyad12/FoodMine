import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/food';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];
  constructor(private foodService:FoodService,acivatedRoute:ActivatedRoute) {
    this.foods=foodService.getAll();
    acivatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.foods=this.foodService.getAllFoodBySearchTerm(params.searchTerm)
      else if(params.tag)
      this.foods=foodService.getAllFoodByTag(params.tag)
      else
      this.foods=foodService.getAll();

    })
   }
  ngOnInit(): void {
  }

}
