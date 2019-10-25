import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarDetailsComponent } from './components/cars-details/car-details.component';
import { MaterialModule } from './material.module'
import { CarCardComponent } from './components/car-card/car-card.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CategoryPipe } from './pipes/category.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CarDetailsComponent,
    CarCardComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
