<script lang="ts" setup>
import { InputMail } from "@src/components";
import { reactive, ref } from "@vue/reactivity";

const model = reactive({
  mail: 'teste@teste'
});
</script>

<template>
  <div>
    {{ model.mail }}
    <input-mail v-model="model.mail" />
  </div>
</template>