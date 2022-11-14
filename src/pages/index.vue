<script setup lang="ts" name="Home">
const { t } = useI18n()

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

useTitle('Modele | Home')
</script>

<template>
  <div px-10>
    <Github username="zyyv" />
    <!-- <div f-c-c h-screen>
      <header flex gap-5 py-2 px-5>
        <button
          bg-inherit
          border-none
          @click="toggleDark()"
        >
          <div
            v-if="!isDark"
            icon-btn
            i-carbon:light-filled
          />
          <div
            v-else
            icon-btn
            i-akar-icons:moon-fill
          />
        </button>
        <Navlink
          icon-btn
          i-carbon:logo-github
          to="https://github.com/chris-zhu/modele"
        />
        <div
          icon-btn
          i-carbon:language
          @click="toggleLocales()"
        />
      </header>

      <input
        id="input"
        v-model="name"
        :placeholder="t('intro.whats-your-name')"
        :aria-label="t('intro.whats-your-name')"
        type="text"
        autocomplete="false"
        p="x-4 y-2"
        w="250px"
        text="center black-200 dark:gray"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        @keydown.enter="go"
      >

      <div>
        <button
          m-3
          px-3
          py-1
          cursor-pointer
          disabled:cursor-not-allowed
          text="sm black-200 dark:gray"
          border="~ rounded"
          bg-gray-100
          dark:bg-gray-700
          :disabled="!name"
          @click="go"
        >
          {{ t('button.go') }}
        </button>
        <Navlink :to="`/${Math.floor(Math.random() * 10)}`">
          <button
            m-3
            px-3
            py-1
            cursor-pointer
            text="sm black-200 dark:gray"
            border="~ rounded"
            bg-gray-100
            dark:bg-gray-700
          >
            {{ t('not-found') }}
          </button>
        </Navlink>
      </div>
    </div> -->
  </div>
</template>
