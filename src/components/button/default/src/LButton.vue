
<template>
  <n-button :type="props.type">
    <slot></slot>
  </n-button>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { watch } from "vue";
import _ from "lodash";

// interfaces
export interface PropsInterface {
  message?: string;
  type?: string
}

// definir props
const props = withDefaults(defineProps<PropsInterface>(), {
  type: 'error'
});

// define eventos
const emit = defineEmits(["update:active", "change"]);

// define variaves locais
const localActiveTooltip = ref<boolean>(false);

// definir variaveis  reativas
const showHelp = ref(props.help || false);

const activeTooltip = computed<boolean>({
  get() {
    return localActiveTooltip.value;
  },
  set: (value: boolean) => {
    emit("update:active", value);
    localActiveTooltip.value = value;
  },
});

const showObservation = ref(false);

// do open tooltip
const openTooltip = () => {
  activeTooltip.value = true;
};
</script>