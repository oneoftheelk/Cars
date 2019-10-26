import { Injectable } from '@angular/core';
import { Car, Category, Impact, Probability } from '../interfaces/car'
import { HttpClient } from '@angular/common/http'
import { Subscription } from 'rxjs'
import { environment } from '../../environments/environment'
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private http: HttpClient) {}

  category: Category[] = [ ]

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

  cars: Car[] = []

  getCategoryAmount(category: Category): number {
    const reducer = (acc, car) => car.category === category ? acc + 1 : acc
    return this.cars.reduce(reducer, 0)
  }

  getCars(): Subscription {
    return this.http.get(`${environment.databaseUrl}/cars.json`)
      .pipe(
        map((response: {[key: string]: any}) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key
            }))
        }),
        tap(response => {
          const newCategories = []
          for (const res of response) {
            if (!newCategories.includes(res.category)) {
              newCategories.push(res.category)
            }
          }
          this.category = newCategories
        })
      )
      .subscribe(response => {
        this.cars = response
      })
  }

  addCar(car: Car): Subscription {
    return this.http.post(`${environment.databaseUrl}/cars.json`, car)
      .pipe(
        map(response => {
          return {
            ...car,
            id: response.name
          }
        })
      )
      .subscribe(() => this.getCars())
  }

  removeCar(id: string): Subscription {
    return this.http.delete(`${environment.databaseUrl}/cars/${id}.json`)
      .subscribe(() => {
        this.cars.filter(car => car.id !== id)
        this.getCars()
      })
  }
}
