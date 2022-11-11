<template>
  <main>
    <router-view v-slot="{ Component, route }">
      <transition
        enter-active-class="animate-fade-in animate-duration-200"
        leave-active-class="animate-fade-out animate-duration-200"
        mode="out-in"
      >
        <keep-alive>
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>
