<script lang="ts" setup>
import { LuInputCnpj } from '@src/components'
import { ref } from '@vue/reactivity'

const cnpj = ref("37045780000104")

</script>

<template>
 <lu-input-cnpj v-model="cnpj" />
</template>