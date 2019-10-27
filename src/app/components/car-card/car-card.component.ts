import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { CarsService } from '../../services/cars.service'
import { SnackbarService } from '../../services/snackbar.service'
import { Car } from '../../interfaces/car'

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input() car: Car
  @ViewChild('name', {static: false}) nameField: ElementRef

  form: FormGroup
  selectedProbability: string
  selectedImpact: string
  readonly = true
  areButtonsDisabled = false

  constructor(
    private carsService: CarsService,
    private snackbarService: SnackbarService
  ) {}

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
    this.nameField.nativeElement.focus()
  }

  removeCar(id: string) {
    this.areButtonsDisabled = true

    this.carsService.removeCar(id)
      .subscribe(() => {
        this.carsService.getCars()
          .subscribe(() => {
            this.areButtonsDisabled = false
            this.snackbarService.openSnackBar('Car has been removed')
          })
        }
      )
  }

  updateCar() {
    if (this.form.status === 'INVALID') {
      return null
    }

    this.areButtonsDisabled = true

    const updatedCar: Car = {
      ...this.form.value,
      category: this.car.category,
      id: this.car.id
    }

    this.carsService.updateCar(updatedCar)
      .subscribe(() => {
        this.areButtonsDisabled = false
        this.snackbarService.openSnackBar('Car has been updated')
      })
  }
}
