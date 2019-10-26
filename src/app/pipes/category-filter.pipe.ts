import { Pipe, PipeTransform } from '@angular/core';
import { Car, Category } from '../interfaces/car'

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(cars: Car[], category: string): Car[] {
    return cars.filter(car => car.category === category);
  }

}
