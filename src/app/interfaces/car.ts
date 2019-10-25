export interface Category {
  id: number,
  name: string
}

export interface Probability {
  id: number
  name: string
}

export interface Impact {
  id: number
  name: string
}

export interface Car {
  id: number
  category: Category
  name: string
  description: string
  probability?: Probability
  impact?: Impact
}
