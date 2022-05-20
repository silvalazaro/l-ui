<template>
    <div class="block">
      <span class="block text-sm font-medium text-slate-700">
        <lu-tooltip-help :message="tooltip" :observation="observation" :tooltip="{placement: 'top'}">
          {{ label }}
        </lu-tooltip-help>
      </span>
      <el-input
        v-model="value"
        @input="changeInput"
        ref="input"
        :disabled="disabled"
      />
      <p class="mt-2 text-rose-500 text-sm">
        {{ message }}
      </p>
    </div>
</template>

<script lang="ts" setup>
import Schema from "async-validator";
import { LuTooltipHelp } from '@src/components'
import _ from 'lodash'
import { computed, handleError, ref } from "@vue/runtime-core";

interface Props {
 
}

const props = withDefaults(defineProps<{
   required?: boolean;
  modelValue: string;
  label?: string;
  validators?: Array<any>;
  disabled?: boolean;
  observation?: string;
}>(),{});

const emit = defineEmits(["update:modelValue", "change"]);

const message = ref("");

const tooltip = `Preencha o campo ${props.label}`

const tempValue = ref("");

const value = computed({
  get() {
    return tempValue.value || props.modelValue;
  },
  set: (value: string) => {
    tempValue.value = value;
  },
});

let validator: any = null;
if (props.validators) {
  validator = new Schema({
    input: props.validators,
  });
}

const changeInput = _.debounce(function (value) {
  if (validator) {
    validator.validate({ input: value }, (errors: any, fields: any) => {
      if (errors) {
        message.value = errors[0].message;
        return handleError(errors, fields, validator);
      }
      emit("update:modelValue", value);
      message.value = "";
    });
  } else {
    emit("update:modelValue", value);
  }
}, 300);
</script>
