import { Component, OnInit } from '@angular/core'
import { CarsService } from '../../services/cars.service'
import { MatDialog } from '@angular/material'
import { CarAddComponent } from '../car-add/car-add.component'

@Component({
  selector: 'app-car-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {
  isLoading = false

  constructor(
    private carsService: CarsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.isLoading = true
    this.carsService.getCars()
      .subscribe(() => this.isLoading = false)
  }

  getCategoryAmount(category) {
    return this.carsService.getCategoryAmount(category)
  }

  openDialog() {
    this.dialog.open(CarAddComponent, {disableClose: true})
  }
}
