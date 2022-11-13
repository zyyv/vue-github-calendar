<script lang='ts' setup>
import { ApiResponse, Day } from '~/types/common'
import { groupByWeeks } from '~/utils'

const props = withDefaults(defineProps<{
  username: string
  lastMonth?: number
}>(), {

})

const state = reactive<ApiResponse>({
  contributions: [],
  total: {},
})

const contributions = computed(() => {
  const arr = state.contributions
  const result = []
  for (let i = 0; i < arr.length; i += 7)
    result.push(arr.slice(i, i + 7))

  return result
})

function filterLastByMonth(contributions: Day[], month: number) {
  const now = new Date()
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - month, 1)
  return contributions.filter((day) => {
    const date = new Date(day.date)
    return date >= lastMonth
  })
}

onMounted(async() => {
  const data = await useContributions(props.username)
  if (props.lastMonth != null) {
    state.contributions = filterLastByMonth(data.contributions, props.lastMonth)
    // console.log(groupByWeeks(state.contributions))

    state.total = { [`${props.lastMonth}Mons Ago`]: state.contributions.reduce((total, item) => total + item.count, 0) }
  } else {
    state.contributions = data.contributions
    state.total = data.total
  }
})
</script>

<template>
  <div>
    <h1>{{ state.total }}</h1>
    <svg width="717" height="112">
      <g transform="translate(15,20)">
        <template v-for="(list, index) in contributions" :key="index">
          <g :transform="`translate(${index * 14}, 0)`">
            <rect
              v-for="(item, i) in list"
              :key="item.date"
              width="10"
              height="10"
              :x="14 - index"
              :y="i * 13"
              :class="`fill-level-${item.level}`"
              rx="2"
              ry="2"
            />
          </g>
        </template>
      </g>
    </svg>
  </div>
</template>
