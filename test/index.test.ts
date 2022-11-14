import { describe, expect, it } from 'vitest'
import dayjs from 'dayjs'
import { eachDayOfInterval, formatDate, formatISO } from '../src/utils/index'

describe('utils test', () => {
  it('formatDate', () => {
    const date = new Date()
    expect(formatDate(date)).toMatchInlineSnapshot('"Nov 14, 2022"')
    const arr: number[] = []
    for (let i = 0; i < 12; i++)
      arr.push(i * 64)

    expect(arr).toMatchInlineSnapshot(`
      [
        0,
        64,
        128,
        192,
        256,
        320,
        384,
        448,
        512,
        576,
        640,
        704,
      ]
    `)
  })

  it('eachDayOfInterval', () => {
    const start = new Date('2022-11-20')
    const end = new Date('2022-11-30')
    const days = eachDayOfInterval(start, end)

    const range = eachDayOfInterval(
      dayjs().subtract(1, 'month').toDate(),
      new Date(),
    )

    expect(days.length).toBe(11)
    expect(range.map(day => formatISO(day, { representation: 'date' }))).toMatchInlineSnapshot(`
      [
        "2022-10-14",
        "2022-10-15",
        "2022-10-16",
        "2022-10-17",
        "2022-10-18",
        "2022-10-19",
        "2022-10-20",
        "2022-10-21",
        "2022-10-22",
        "2022-10-23",
        "2022-10-24",
        "2022-10-25",
        "2022-10-26",
        "2022-10-27",
        "2022-10-28",
        "2022-10-29",
        "2022-10-30",
        "2022-10-31",
        "2022-11-01",
        "2022-11-02",
        "2022-11-03",
        "2022-11-04",
        "2022-11-05",
        "2022-11-06",
        "2022-11-07",
        "2022-11-08",
        "2022-11-09",
        "2022-11-10",
        "2022-11-11",
        "2022-11-12",
        "2022-11-13",
        "2022-11-14",
      ]
    `)
  })
})
