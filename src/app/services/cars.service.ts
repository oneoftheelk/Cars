import { Injectable } from '@angular/core';
import { Car, Category, Impact, Probability } from '../interfaces/car'

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  category: Category[] = [
    { id: 1, name: 'Van' },
    { id: 2, name: 'Truck' }
  ]

  PROBABILITY: Probability[] = [
    { id: 1, name: 'Low (<=10%)' },
    { id: 2, name: 'Medium (<=50%)' },
    { id: 3, name: 'High (<=80%)' },
    { id: 4, name: 'Occurred (100%)' }
  ]

  IMPACT: Impact[] = [
    { id: 1, name: 'Small (<1%)' },
    { id: 2, name: 'Medium (<3%)' },
    { id: 3, name: 'High (<5%)' },
    { id: 4, name: 'Rather high (>=5%)' },
  ]

  cars: Car[] = [
    { id: 1, category: this.category[0], name: 'car 1',
      description: 'description 1', probability: this.PROBABILITY[1], impact: this.IMPACT[0] },
    { id: 2, category: this.category[1], name: 'car 2',
      description: 'description 2', probability: this.PROBABILITY[2], impact: this.IMPACT[1] },
    { id: 3, category: this.category[0], name: 'car 3',
      description: 'description 3', probability: this.PROBABILITY[3], impact: this.IMPACT[3] },
    { id: 4, category: this.category[1], name: 'car 4',
      description: 'description 4', probability: this.PROBABILITY[4], impact: this.IMPACT[2] }
  ]

  getCategoryAmount(category: Category): number {
    const reducer = (acc, car) => car.category === category ? acc + 1 : acc
    return this.cars.reduce(reducer, 0)
  }

  addCar(car: Car) {
    this.cars.push(car)
  }

  removeCar(id: number) {
    this.cars = this.cars.filter(car => car.id !== id)
  }
}
