import type { App } from 'vue'

export type UserModule = (ctx: App) => void

export interface GlobModule {
  install: UserModule
  [key: string]: any
}

export type Level = 0 | 1 | 2 | 3 | 4

export interface Day {
  date: string
  count: number
  level: Level
}

type Week = Array<Day | undefined>
export type Weeks = Week[]

export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type Year = number | 'last'

export interface ApiResponse {
  total: {
    [year: number]: number
    [year: string]: number // 'lastYear;
  }
  contributions: Day[]
}

export interface ApiErrorResponse {
  error: string
}
