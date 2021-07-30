import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',

})
export class RestaurantsComponent implements OnInit {

  public restaurants: Restaurant [] 

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantService.restaurants()
      .subscribe(
        result => {          
          this.restaurants = result
        });                  
  }

}
