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
