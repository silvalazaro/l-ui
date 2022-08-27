<script lang="ts" setup>
import { Validator, ValidatorFactory } from "@src/validator";
import { computed } from "@vue/runtime-core";
import { LuInputText } from "@src/components"
// set props
const props = defineProps<{
  modelValue: string;
  required: boolean
}>();

// set events
const emit = defineEmits(["update:modelValue"]);

// computed variables
const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
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

const validate = ValidatorFactory.createValidator('CNPJ').cnpj()

</script>

<template>
    <lu-input-text v-model="localValue" label="CNPJ" mask="##.###.###/####-##" :validate="validate" >
    </lu-input-text>
</template>