<script lang="ts" setup>
import { Validator, ValidatorFactory } from "@src/validator";
import { computed } from "@vue/runtime-core";
import { LuInputText } from "@src/components"
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
    // delayedFetchCnpj(value).then(e => {
    //   emit('search', e)
    // })
    emit("update:modelValue", value);
  },
});

const validate = ValidatorFactory.createValidator('CNPJ').cnpj()

</script>

<template>
    <lu-input-text v-model="localValue" label="CNPJ" mask="##.###.###/####-##" :validate="validate" >
    </lu-input-text>
</template>