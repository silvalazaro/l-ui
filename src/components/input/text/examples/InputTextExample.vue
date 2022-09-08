<template>
  <div>
    <input-text
      v-model="model.name"
      mask="(##).###/##"
      label="Nome"
    />
    {{ model.name }}<br>
  </div>
</template>

<script lang="ts" setup>
import { InputText } from "@src/components";
import { reactive, ref } from "@vue/reactivity";
import { ValidatorFactory } from "@src/validator";

const model = reactive({
  name: '82'
});

</script>