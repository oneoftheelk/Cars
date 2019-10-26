import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service'
import { MatDialog } from '@angular/material'
import { CarAddComponent } from '../car-add/car-add.component'

@Component({
  selector: 'app-car-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {

  constructor(
    private carsService: CarsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  getCategoryAmount(category) {
    return this.carsService.getCategoryAmount(category)
  }

  openDialog() {
    this.dialog.open(CarAddComponent)
  }
}
