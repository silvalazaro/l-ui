<script lang="ts" setup>
import { computed, handleError, ref } from "@vue/runtime-core";
import { mask } from "maska";
import { Validator, ValidatorInterface } from "@src/validator/validator";

// set props
const props = defineProps<{
  modelValue: string;
  label: string;
  mask?: string;
  validate?: ValidatorInterface;
}>();

// events
const emit = defineEmits(["update:modelValue"]);

// computed variables
const localValue = computed({
  get() {
    if(props.mask) return mask(props.modelValue, props.mask)
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
 
// message of error after validation
const erroMessage = ref('')

const inputStatus = ref('')


// methods
function validate(value:string){
  if(!props.validate) return
  
  props.validate.execute(value).then(() => {
    erroMessage.value = ''
    inputStatus.value = ""
  })
  .catch(e => {
    inputStatus.value = "error"
    erroMessage.value = e.message
  })

}


</script>

<template>
  <div class="block " >
    <div class="inline-flex w-full">
      <lu-button-info message="Teste de parada tesuoiq peoti">
        <div>
          <span class="mr-1">{{ props.label }}</span>
        </div>
      </lu-button-info>
    </div>
    <n-input v-model:value="localValue" :placeholder="label" :status="inputStatus" @input="validate"/>
    <div class="text-left">
      <span class="mt-2 peer-invalid:visible text-pink-600 text-sm" v-if="erroMessage">
      {{erroMessage}}
    </span>
    </div>
  </div>
</template>