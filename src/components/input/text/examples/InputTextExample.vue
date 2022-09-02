<script lang="ts" setup>
import { LuInputText } from "@src/components";
import { ref } from "@vue/reactivity";
import { ValidatorFactory } from "@src/validator";

const name = ref("1020304040");
const validator = ValidatorFactory.createValidator("Nome").required();
</script>

<template>
  <div>
    <lu-input-text
      v-model="name"
      mask="(##).###/##"
    />
  </div>
</template>

