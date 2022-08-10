<script lang="ts" setup>
import { computed } from "@vue/runtime-core";
import {vMask} from '@src/mask/directive'
// set props
const props = defineProps<{
  modelValue: string;
}>();

// set events
const emit = defineEmits(["update:modelValue"]);

// computed variables
const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
       console.log(value)
    emit("update:modelValue", value);
  },
});

const remoteValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
 
    emit("update:modelValue", value);
  },
});

const mask = {
  mask: '##.###.###/####-##',
  valor: 10
}

</script>

<template>
    <lu-input-text v-model="localValue" label="CNPJ" v-mask="mask">
    </lu-input-text>
</template>