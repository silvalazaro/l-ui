<script lang="ts" setup>
import { LuInputCpf } from "@src/components";
import { reactive, ref } from "@vue/reactivity";

const cnpj = ref("37045780000104");
const companyCnpjWs = reactive({});
</script>

<template>
  <div>
    <lu-input-cpf v-model="cpf" />
    <div style="max-width: 200px">
       <pre>
       <code>
       </code>
    </pre>
    </div>
  </div>
</template>