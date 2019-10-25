import { Pipe, PipeTransform } from '@angular/core';
import { Car, Category } from '../interfaces/car'

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(cars: Car[], category: Category): Car[] {
    return cars.filter(car => car.category === category);
  }

}
