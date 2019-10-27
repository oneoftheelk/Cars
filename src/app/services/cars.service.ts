import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { environment } from '../../environments/environment'

import { Car, Category, Impact, Probability } from '../interfaces/car'

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private http: HttpClient) {}

  category: Category[] = []

  PROBABILITY: Probability[] = [
    { id: 1, name: 'Low (<10%)' },
    { id: 2, name: 'Medium (10% - 59%)' },
    { id: 3, name: 'High (60% - 99%)' },
    { id: 4, name: 'Occurred (100%)' }
  ]

  IMPACT: Impact[] = [
    { id: 1, name: 'Small (<1%)' },
    { id: 2, name: 'Medium (1% - 3%)' },
    { id: 3, name: 'High (3% - 5%)' },
    { id: 4, name: 'Rather high (>5%)' },
  ]

  cars: Car[] = []

  getCategoryAmount(category: Category): number {
    const reducer = (acc, car) => car.category === category ? acc + 1 : acc
    return this.cars.reduce(reducer, 0)
  }

  getCars(): Observable<Car[]> {
    return this.http.get(`${environment.databaseUrl}/cars.json`)
      .pipe(
        // приводит ответ к нужному виду (индекс: значение)
        map((response: {[key: string]: any}) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key
            }))
        }),
        tap(response => {
          this.cars = response

          // обновляет категории уникальными значениями
          const newCategories = []
          for (const res of response) {
            if (!newCategories.includes(res.category)) {
              newCategories.push(res.category)
            }
          }
          this.category = newCategories
        })
      )
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${environment.databaseUrl}/cars.json`, car)
      .pipe(
        map(response => {
          return {
            ...car,
            id: response.name
          }
        })
      )
  }

  removeCar(id: string): Observable<any> {
    return this.http.delete(`${environment.databaseUrl}/cars/${id}.json`)
      .pipe(
        tap(() => {
          this.cars.filter(car => car.id !== id)
        })
      )
  }

  updateCar(car: Car): Observable<Car> {
    return this.http.patch<Car>(`${environment.databaseUrl}/cars/${car.id}.json`, car)
      .pipe(
        tap(response => {
          // tslint:disable-next-line:no-shadowed-variable
          this.cars = this.cars.map(car => response.id === car.id ? response : car)
        })
      )
  }
}
