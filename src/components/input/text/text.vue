<script lang="ts" setup>
import { computed, handleError, ref } from "@vue/runtime-core";
import {createValidator} from "@src/validator"

// set props
const props = defineProps<{
  modelValue: string;
  label: string;
  validate?: any;
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

// set ref
// message of error after validation
const erroMessage = ref('')

const inputStatus = ref('')

// const validator = createValidator('required')

// // methods
// function validate(value:string){
//   validator.validate({ name: value }, (errors, fields) => {
//   if (errors) {
//     inputStatus.value="error"
//     erroMessage.value = errors[0].message
//     return
//   }
//   inputStatus.value=""
//   erroMessage.value = ''
// });
// }


</script>

<template>
  <div class="block" >
    <div class="inline-flex w-full">
      <lu-tooltip-info message="Teste de parada tesuoiq peoti">
        <span class="mr-1">{{ props.label }}</span>
      </lu-tooltip-info>
    </div>
    <n-input v-model:value="localValue" :placeholder="label" :status="inputStatus" />
    <p class="mt-2 peer-invalid:visible text-pink-600 text-sm" v-if="erroMessage">
      {{erroMessage}}
    </p>
  </div>
</template>