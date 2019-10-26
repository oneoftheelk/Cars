import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatDialogModule
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
    MatDialogModule
  ]
})
export class MaterialModule { }
