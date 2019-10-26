import { Component, OnInit } from '@angular/core'
import { CarsService } from '../../services/cars.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Car } from '../../interfaces/car'
import { MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent implements OnInit {

  form: FormGroup
  selectedProbability = ''
  selectedImpact = ''
  areButtonsDisabled = false

  constructor(
    private carsService: CarsService,
    public dialogRef: MatDialogRef<CarAddComponent>
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      category: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      probability: new FormControl('', Validators.required),
      impact: new FormControl('', Validators.required)
    })
  }

  submit() {
    if (this.form.status === 'INVALID') {
      return null
    }

    this.areButtonsDisabled = true

    // const car: Car = {
    //   ...this.form.value,

      // id: Math.random().toFixed(2),
      // category: this.form.value.category,
      // name: this.form.value.name,
      // description: this.form.value.description,
      // probability: this.selectedProbability,
      // impact: this.selectedImpact
    // }

    this.carsService.addCar({...this.form.value})
      .subscribe(() => {
        this.carsService.getCars()
          .subscribe(() => {
            this.close()
            this.areButtonsDisabled = false
          })
      })
  }

  close() {
    this.dialogRef.close()
  }
}
