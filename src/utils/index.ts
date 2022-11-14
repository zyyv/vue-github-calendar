import dayjs from 'dayjs'
import type { Day, WeekDay, Weeks } from '~/types/common'

export const DEFAULT_MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const DEFAULT_WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const DEFAULT_LABELS = {
  months: DEFAULT_MONTH_LABELS,
  weekdays: DEFAULT_WEEKDAY_LABELS,
  totalCount: '{{count}} contributions in {{year}}',
  tooltip: '<strong>{{count}} contributions</strong> on {{date}}',
  legend: {
    less: 'Less',
    more: 'More',
  },
}

export function parseISO(date: string) {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export function formatDate(date: Date) {
  return dayjs(date).format('MMM DD, YYYY')
}

export function groupByWeeks(days: Day[], weekStart: WeekDay = 0): Weeks {
  if (days.length === 0) return []

  const normalizedDays = normalizeCalendarDays(days)

  const firstDate = parseISO(normalizedDays[0].date)
  const firstCalendarDate = getDay(firstDate) === weekStart ? firstDate : subWeeks(nextDay(firstDate, weekStart), 1)

  const paddedDays: Array<Day | undefined> = [...Array(differenceInCalendarDays(firstDate, firstCalendarDate)).fill(undefined), ...normalizedDays]

  return Array.from({ length: Math.ceil(paddedDays.length / 7) }, (_, i) => paddedDays.slice(i * 7, i * 7 + 7))
}

export function normalizeCalendarDays(days: Day[]): Day[] {
  const daysMap = days.reduce((map, day) => {
    map.set(day.date, day)
    return map
  }, new Map<string, Day>())

  return eachDayOfInterval(parseISO(days[0].date), parseISO(days[days.length - 1].date)).map((day) => {
    const date = formatISO(day, { representation: 'date' })!

    if (daysMap.has(date))
      return daysMap.get(date)!

    return {
      date,
      count: 0,
      level: 0,
    }
  })
}

export function formatISO(date: Date, options?: { representation: 'date' | 'time' }) {
  const nDate = dayjs(date)
  if (options?.representation === 'date')
    return nDate.format('YYYY-MM-DD')
  if (options?.representation === 'time')
    return nDate.format('HH:mm:ss')
}

// 返回指定时间间隔内的日期数组。
export function eachDayOfInterval(start: Date, end: Date): Date[] {
  // const { start, end } = interval
  const days = []

  let date = start
  while (isBefore(date, end) || isEqual(date, end)) {
    days.push(date)
    date = addDays(date, 1)
  }

  return days
}

function isBefore(dateLeft: Date, dateRight: Date) {
  return dayjs(dateLeft).isBefore(dateRight)
}

function isEqual(dateLeft: Date, dateRight: Date) {
  return dayjs(dateLeft).isSame(dateRight)
}

function addDays(date: Date, amount: number) {
  return dayjs(date).add(amount, 'day').toDate()
}

function getDay(date: Date) {
  return date.getDay()
}

function nextDay(date: Date, day: WeekDay) {
  const diff = (day - date.getDay() + 7) % 7
  return addDays(date, diff)
}

function subWeeks(date: Date, amount: number) {
  return dayjs(date).subtract(amount, 'week').toDate()
}

function differenceInCalendarDays(dateLeft: Date, dateRight: Date) {
  return dayjs(dateLeft).diff(dateRight, 'day')
}
