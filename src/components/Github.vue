<script lang='ts' setup>
import { reactive } from 'vue'
import dayjs from 'dayjs'
import { ApiResponse, Day, Weeks } from '~/types/common'
import { DEFAULT_MONTH_LABELS, DEFAULT_WEEKDAY_LABELS, Label, eachDayOfInterval, formatISO, getMonthLabels, groupByWeeks } from '~/utils'

const props = withDefaults(defineProps<{
  username: string
  month?: number
}>(), {

})

const STATIC_DATE = {
  blockSize: 10,
  bloclGap: 2,
  blockRadius: 2,
  blockMargin: 2,
  textHeight: 12 + 2 * 2,
}

const state = reactive<{
  weeks: Weeks
  labels: Label[]
  total: ApiResponse['total']
}>({
  weeks: [],
  labels: [],
  total: {},
})

function filterLastByMonth(contributions: Day[], month: number) {
  const range = eachDayOfInterval(
    dayjs().subtract(month, 'month').toDate(),
    new Date(),
  ).map(date => formatISO(date, { representation: 'date' }))

  return contributions.filter(day => range.includes(day.date))
}

onMounted(async() => {
  const data = await useContributions(props.username)
  let contributions = data.contributions
  let total = data.total
  if (props.month != null) {
    contributions = filterLastByMonth(data.contributions, props.month)
    total = { [`${props.month}Mons Ago`]: contributions.reduce((total, item) => total + item.count, 0) }
  }

  state.weeks = groupByWeeks(contributions)
  state.labels = getMonthLabels(state.weeks, DEFAULT_MONTH_LABELS)
})
</script>

<template>
  <div>
    <h1>{{ state.total }}</h1>
    <svg width="717" height="112">
      <g transform="translate(15,20)">
        <template v-for="(list, index) in state.weeks" :key="index">
          <g :transform="`translate(${index * 14}, 0)`">
            <template v-for="(item, i) in list" :key="i">
              <rect
                v-if="item"
                :width="STATIC_DATE.blockSize"
                :height="STATIC_DATE.blockSize"
                :x="14 - index"
                :y="i * 13"
                :class="`fill-level-${item.level}`"
                :rx="STATIC_DATE.blockRadius"
                :ry="STATIC_DATE.blockRadius"
                :data-count="item.count"
                :data-date="item.date"
                :data-level="item.level"
              />
            </template>
          </g>
        </template>
        <!-- Month -->
        <template v-for="(item, index) in state.labels" :key="index">
          <text class="fill-[#adbac7] text-xs" :x="14 * item.x" :y="item.y">
            {{ item.text }}
          </text>
        </template>
        <!-- Week -->
        <template v-for="(item, index) in DEFAULT_WEEKDAY_LABELS" :key="index">
          <text v-if="index % 2" class="fill-[#adbac7] text-xs" dx="-15" :dy="8 + index * 13" text-anchor="start">
            {{ item }}
          </text>
        </template>
      </g>
    </svg>
  </div>
</template>
