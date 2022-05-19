<template>
  <div>
    <lu-input v-model="value" label="Nome" />
  </div>
</template>

<script lang="ts" setup>
import { LuInput } from '@src/components'
import { ref } from '@vue/reactivity'

const value = ref('')

</script>
