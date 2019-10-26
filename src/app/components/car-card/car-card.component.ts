import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { CarsService } from '../../services/cars.service'
import { Car } from '../../interfaces/car'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input() car: Car

  form: FormGroup
  selectedProbability: string
  selectedImpact: string
  readonly = true

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.selectedProbability = this.car.probability
    this.selectedImpact = this.car.impact

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      probability: new FormControl('', Validators.required),
      impact: new FormControl('', Validators.required)
    })
  }

  editCar() {
    this.readonly = false
  }

  removeCar(id: string) {
    this.carsService.removeCar(id)
      .subscribe(() => this.carsService.getCars()
        .subscribe()
      )
  }

  updateCar() {
    const updatedCar: Car = {
      ...this.form.value,
      category: this.car.category,
      id: this.car.id
    }
    this.carsService.updateCar(updatedCar)
      .subscribe()
    // const updatedCar = {
    //   ...this.car,
    //   [event.currentTarget.id]: event.currentTarget.value
    // }

    // this.carsService.updateCar(updatedCar)
    //   .subscribe()
  }
}
