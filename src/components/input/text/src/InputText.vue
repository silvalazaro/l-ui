<template>
  <div class="block">
    <div class="inline-flex w-full">
      <button-info :message="props.message">
          <span class="mr-1">{{ props.label }}</span>
      </button-info>
    </div>
    <n-input
      v-model:value="localValue"
      :placeholder="label"
      @input="input"
      :status="inputStatus"
      v-mask="props.mask"
      ref="el"
    />
    <div class="text-left">
      <span
        class="mt-2 peer-invalid:visible text-pink-600 text-sm"
        v-if="erroMessage"
      >
        {{ erroMessage }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ButtonInfo } from '@src/components'
import { computed, handleError } from "@vue/runtime-core";
import { mask } from "maska";
import { Validator, ValidatorInterface } from "@src/validator/validator";
import { vMask } from "@src/mask";
import { ref, nextTick, onMounted } from "vue";

interface PropsInterface{
  modelValue: any;
  label: string;
  mask?: string;
  message?: string;
  validator?: ValidatorInterface;
}

// set props
const props = withDefaults(defineProps<PropsInterface>(), {
  label: 'Digite'
})

// set events
const emit = defineEmits(["update:modelValue"]);

// set refs
const maskedValue = ref("");
const el = ref();

// computed variables
const localValue = computed({
  get() {
    return maskedValue.value || props.modelValue;
  },
  set(value: any) {
    maskedValue.value = value;
  },
});

// message of error after validation
const erroMessage = ref("");

const inputStatus = ref("");

// methods
function validate(value: string, validator: ValidatorInterface) {
  validator
    .execute(value)
    .then(() => {
      erroMessage.value = "";
      inputStatus.value = "";
    })
    .catch((e) => {
      inputStatus.value = "error";
      erroMessage.value = e.message;
    });
}

function input(value: any) {
  if (props.mask)
    emit("update:modelValue", mask(value, props.mask, undefined, false));
  else emit("update:modelValue", value);

  if (props.validator) validate(value, props.validator);
}

onMounted(() => {
  if(props.validator) validate(props.modelValue, props.validator)
})
</script>