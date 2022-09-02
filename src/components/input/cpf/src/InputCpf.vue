<script lang="ts" setup>
import { ValidatorFactory } from "@src/validator";
import { computed } from "vue";
import { LuInputText } from "@src/components"

 // set props
interface PropsInterface{
  modelValue: string;
  required?: boolean;
  label?: string;
}

const props = withDefaults(defineProps<PropsInterface>(), {
  label: 'CPF'
})

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




const validator = ValidatorFactory.createValidator('CPF').cpf()

</script>

<template>
    <lu-input-text v-model="localValue" :label="props.label" mask="###.###.###-##" :validator="validator" >
    </lu-input-text>
</template>