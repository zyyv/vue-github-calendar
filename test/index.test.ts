import { describe, expect, it } from 'vitest'
// import dayjs from 'dayjs'
import { eachDayOfInterval, formatDate, formatISO } from '../src/utils/index'

describe('utils test', () => {
  it('formatDate', () => {
    const date = new Date()
    expect(formatDate(date)).toMatchInlineSnapshot('"Nov 14, 2022"')
  })

  it('eachDayOfInterval', () => {
    const start = new Date('2022-11-20')
    const end = new Date('2022-11-30')
    const days = eachDayOfInterval(start, end)
    expect(days.length).toBe(11)
    expect(days.map(day => formatISO(day, { representation: 'date' }))).toMatchInlineSnapshot(`
      [
        "2022-11-20",
        "2022-11-21",
        "2022-11-22",
        "2022-11-23",
        "2022-11-24",
        "2022-11-25",
        "2022-11-26",
        "2022-11-27",
        "2022-11-28",
        "2022-11-29",
        "2022-11-30",
      ]
    `)
  })
})
