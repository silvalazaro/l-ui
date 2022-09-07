<script lang="ts" setup>
import { InputCnpj } from "@src/components";
import { reactive, ref } from "@vue/reactivity";

const cnpj = ref("37045780000104");
const companyCnpjWs = reactive({});
</script>

<template>
  <div>
    <input-cnpj v-model="cnpj" @search="(e) => (companyCnpjWs = e)" />
    <div style="max-width: 200px">
       <pre>
       <code>
         {{ JSON.stringify(companyCnpjWs) }}
       </code>
    </pre>
    </div>
  </div>
</template>