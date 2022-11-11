<script lang='ts' setup>
const props = withDefaults(defineProps<{
  to: string;
  replace?: boolean;
  activeClass?: string;
  inactiveClass?: string;
}>(), {
  activeClass: '',
})

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <a
    v-if="isExternalLink"
    no-underline
    outline-none
    v-bind="$attrs"
    :href="to as string"
    target="_blank"
  >
    <slot />
  </a>
  <router-link v-else v-slot="{ isActive, href, navigate }" v-bind="$props" custom>
    <a
      v-bind="$attrs"
      :href="href"
      class="no-underline"
      :class="isActive ? activeClass : inactiveClass"
      @click="navigate"
    >
      <slot />
    </a>
  </router-link>
</template>
