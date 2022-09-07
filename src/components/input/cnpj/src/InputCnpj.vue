<script lang="ts" setup>
import { Validator, ValidatorFactory } from "@src/validator";
import { computed } from "@vue/runtime-core";
import { InputText } from "@src/components"
import { delayedFetchCnpj } from "@src/service/cnpj"

 // set props
const props = defineProps<{
  modelValue: string;
  required?: boolean
}>();

// set events
const emit = defineEmits(["update:modelValue", "search"]);

// computed variables
const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(value:string) {
    emit("update:modelValue", value);
  },
});

const validator = ValidatorFactory.createValidator('CNPJ').cnpj()

</script>

<template>
    <input-text v-model="localValue" label="CNPJ" mask="##.###.###/####-##" :validator="validator" >
    </input-text>
</template>