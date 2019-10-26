import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatDialogModule,
  MatAutocompleteModule
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }
