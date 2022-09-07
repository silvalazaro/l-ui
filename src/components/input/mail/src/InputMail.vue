<script lang="ts" setup>
import { ValidatorFactory } from "@src/validator";
import { computed } from "vue";
import { InputText } from "@src/components"

 // set props
interface PropsInterface{
  modelValue: string;
  required?: boolean;
  label?: string;
}

const props = withDefaults(defineProps<PropsInterface>(), {
  label: 'E-mail'
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

const validator = ValidatorFactory.createValidator('E-mail').mail()

</script>

<template>
    <input-text v-model="localValue" :label="props.label" :validator="validator" >
    </input-text>
</template>