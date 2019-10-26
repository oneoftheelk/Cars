import { Component, OnInit } from '@angular/core'
import { CarsService } from '../../services/cars.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material'
import { SnackbarService } from '../../services/snackbar.service'

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
    public dialogRef: MatDialogRef<CarAddComponent>,
    private snackbarService: SnackbarService
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

    this.carsService.addCar({...this.form.value})
      .subscribe(() => {
        this.carsService.getCars()
          .subscribe(() => {
            this.dialogRef.close()
            this.areButtonsDisabled = false
            this.snackbarService.openSnackBar('Car has been added')
          })
      })
  }

  close() {
    this.dialogRef.close()
    this.snackbarService.openSnackBar('No changes applied')
  }
}
