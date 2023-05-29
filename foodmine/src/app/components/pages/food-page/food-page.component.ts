import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/food';
import { CartService } from 'src/app/service/cart.service';
import { FoodService } from 'src/app/service/food.service';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
food!:Food

  constructor(activated:ActivatedRoute,foodService:FoodService , private cartService:CartService , private router:Router) {

    activated.params.subscribe((params)=>{
      if(params.id)
      this.food=foodService.getFoodById(params.id)
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
