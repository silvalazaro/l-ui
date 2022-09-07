<script lang="ts" setup>
import { InputMail } from "@src/components";
import { ref } from "@vue/reactivity";

const mail = ref("laz");
</script>

<template>
  <div>
    <input-mail v-model="mail" />
  </div>
</template>