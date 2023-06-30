<script setup lang="ts">
import { isDark, toggleDark } from './composables/useDark'
import GC from './components/GC.vue'

const filterWeekDay = () => true
</script>

<template>
  <div>
    <header
      flex
      justify-end
      gap-5
      py-2
      px-5
    >
      <button bg-inherit border-none @click="toggleDark()">
        <div v-if="!isDark" icon-btn i-carbon:light-filled />
        <div v-else icon-btn i-akar-icons:moon-fill />
      </button>
      <a icon-btn cursor-pointer i-carbon:logo-github href="https://github.com/zyyv/vue-github-calendar" target="_blank" />
    </header>
    <div mt-10 px-10 space-y-4>
      <div b="~ gray" rd-2 p-2 w-fit>
        <GC username="zyyv" />
      </div>
      <GC username="zyyv" />
      <GC username="zyyv" :month="2" />
      <GC username="zyyv" :month="5" hide-month />
      <GC username="zyyv" :month="5" hide-weekday />
      <GC username="zyyv" :month="5" hide-month :filter-week-day="filterWeekDay" />
    </div>
  </div>
</template>

<style>
body {
  --uno: bg text;
}
</style>
