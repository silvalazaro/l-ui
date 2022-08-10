<script lang="ts" setup>
import { LuInputText } from '@src/components'
import { ref } from '@vue/reactivity'

const name = ref("")

</script>

<template>
  <div>
    <lu-input-text v-model="name" label="Nome" validate="required" />
  </div>
</template>

