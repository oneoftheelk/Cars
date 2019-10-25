import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service'

@Component({
  selector: 'app-car-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  constructor(private carsService: CarsService) { }

  ngOnInit() {
  }

  getCategoryAmount(category) {
    return this.carsService.getCategoryAmount(category)
  }
}
