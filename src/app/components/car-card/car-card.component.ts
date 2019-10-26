import { Component, Input, OnInit } from '@angular/core'
import { CarsService } from '../../services/cars.service'
import { Car } from '../../interfaces/car'

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input() car: Car

  selectedProbability = ''
  selectedImpact = ''
  readonly = true

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.selectedProbability = this.car.probability
    this.selectedImpact = this.car.impact
  }

  editCar() {
    this.readonly = false
  }

  removeCar(id: string) {
    this.carsService.removeCar(id)
  }
}
