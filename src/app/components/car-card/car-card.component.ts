import { Component, Input, OnInit } from '@angular/core'
import { CarsService } from '../../services/cars.service'
import { Category } from '../../interfaces/car'

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  selectedOption = '' // Не выбираются начальные значения
  disabled = true

  @Input() category: Category

  constructor(private carsService: CarsService) { }

  ngOnInit() {
  }

  editCar() {
    this.disabled = false
  }

  removeCar(id: number) {
    this.carsService.removeCar(id)
  }
}
