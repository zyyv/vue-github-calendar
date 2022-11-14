<script lang='ts' setup>
import { reactive } from 'vue'
import dayjs from 'dayjs'
import { ApiResponse, Day, Weeks } from '~/types/common'
import { DEFAULT_WEEKDAY_LABELS, Label, eachDayOfInterval, formatISO, getMonthLabels, groupByWeeks } from '~/utils'

const props = withDefaults(defineProps<{
  username: string
  month?: number
}>(), {

})

const STATIC_DATA = {
  blockSize: 10,
  bloclGap: 3,
  blockRadius: 2,
  lrGap: 15,
  tbGap: 20,
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

const WIDTH = computed(() => {
  return state.weeks.length * STATIC_DATA.blockSize + (state.weeks.length - 1) * STATIC_DATA.bloclGap + STATIC_DATA.lrGap * 2 + 1
})

const HEIGHT = computed(() => {
  return 7 * STATIC_DATA.blockSize + 6 * STATIC_DATA.bloclGap + STATIC_DATA.tbGap + 4
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
  state.labels = getMonthLabels(state.weeks)
})
</script>

<template>
  <div>
    <h1>{{ state.total }}</h1>
    <svg b :width="WIDTH" :height="HEIGHT">
      <g :transform="`translate(${STATIC_DATA.lrGap},${STATIC_DATA.tbGap})`">
        <template v-for="(list, index) in state.weeks" :key="index">
          <g :transform="`translate(${index * (STATIC_DATA.blockSize + STATIC_DATA.bloclGap + 1)}, 0)`">
            <template v-for="(item, i) in list" :key="i">
              <rect
                v-if="item"
                :width="STATIC_DATA.blockSize"
                :height="STATIC_DATA.blockSize"
                :x="(STATIC_DATA.blockSize + STATIC_DATA.bloclGap) - index"
                :y="i * (STATIC_DATA.blockSize + STATIC_DATA.bloclGap)"
                :class="`fill-level-${item.level}`"
                :rx="STATIC_DATA.blockRadius"
                :ry="STATIC_DATA.blockRadius"
                :data-count="item.count"
                :data-date="item.date"
                :data-level="item.level"
              />
            </template>
          </g>
        </template>
        <!-- Month -->
        <template v-for="(item, index) in state.labels" :key="index">
          <text class="fill-[#adbac7] text-xs" :x="(STATIC_DATA.blockSize + STATIC_DATA.bloclGap) * (item.x + 1)" :y="item.y">
            {{ item.text }}
          </text>
        </template>
        <!-- Week -->
        <template v-for="(item, index) in DEFAULT_WEEKDAY_LABELS" :key="index">
          <text class="fill-[#adbac7] text-xs" dx="-15" :dy="8 + index * (STATIC_DATA.blockSize + STATIC_DATA.bloclGap)" text-anchor="start">
            {{ item }}
          </text>
        </template>
      </g>
    </svg>
  </div>
</template>
