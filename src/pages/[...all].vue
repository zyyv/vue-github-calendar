<script lang="ts" setup>
const { t } = useI18n()
useTitle('Modele | Not Found')
</script>

<template>
  <div>
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
