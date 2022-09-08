
<template>
  <n-tooltip :trigger="trigger">
    <template #trigger>
      <slot></slot>
    </template>
    {{ message }}
  </n-tooltip>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { watch } from "vue";
import _ from "lodash";

// interfaces
export interface PropsInterface {
  message?: string;
}

// definir props
const props = defineProps<PropsInterface>();

const trigger = props.message ? "hover" : "manual";

</script>