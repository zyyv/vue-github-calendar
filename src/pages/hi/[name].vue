<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  user.setNewName(props.name)
})

useTitle(`Modele | ${props.name}`)
</script>

<template>
  <div f-c-c gap-6 pt20>
    <p>
      {{ t('intro.hi', { name: props.name }) }}
    </p>

    <p text-sm op-50>
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <p text-sm flex gap-4>
        <span opacity-75>{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <Navlink :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </Navlink>
          </li>
        </ul>
      </p>
    </template>

    <button
      px-3
      py-1
      cursor-pointer
      text="sm black-200 dark:gray"
      border="~ rounded"
      bg-gray-100
      dark:bg-gray-700
      @click="router.back()"
    >
      {{ t('button.back') }}
    </button>
  </div>
</template>
