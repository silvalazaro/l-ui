<script lang="ts" setup>
import { InputText } from "@src/components";
import { ref } from "@vue/reactivity";
import { ValidatorFactory } from "@src/validator";

const name = ref("1020304040");
const validator = ValidatorFactory.createValidator("Nome").required();
</script>

<template>
  <div>
    <input-text
      v-model="name"
      mask="(##).###/##"
    />
  </div>
</template>

