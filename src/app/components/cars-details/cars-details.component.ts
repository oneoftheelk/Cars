import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service'

@Component({
  selector: 'app-car-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {

  constructor(private carsService: CarsService) { }

  ngOnInit() {
  }

  getCategoryAmount(category) {
    return this.carsService.getCategoryAmount(category)
  }

  addCar() {
    this.carsService.addCar()
  }
}
