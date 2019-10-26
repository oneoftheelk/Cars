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
  category: string
  name: string
  description: string
  probability: string
  impact: string
}
