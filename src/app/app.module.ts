import { MaterialModule } from './material.module'

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { CategoryFilterPipe } from './pipes/category-filter.pipe'
import { AppComponent } from './app.component'
import { CarsDetailsComponent } from './components/cars-details/cars-details.component'
import { CarCardComponent } from './components/car-card/car-card.component'
import { CarAddComponent } from './components/car-add/car-add.component'

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
