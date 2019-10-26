import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsDetailsComponent } from './components/cars-details/cars-details.component';
import { MaterialModule } from './material.module'
import { CarCardComponent } from './components/car-card/car-card.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CategoryFilterPipe } from './pipes/category-filter.pipe'
import { CarAddComponent } from './components/car-add/car-add.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarsDetailsComponent,
    CarCardComponent,
    CarAddComponent,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CarAddComponent]
})
export class AppModule { }
