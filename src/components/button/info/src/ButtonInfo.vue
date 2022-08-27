<script lang="ts" setup>
import { computed, ref } from "vue";
import { watch } from "vue";
import _ from "lodash";

// definir props
const props = withDefaults(
  defineProps<{
    message: string; // mensagem principal a mostrar
    observation?: string; // mensagem secundária
    help?: boolean;
    active?: boolean;
  }>(),
  {
    help: false,
    active: false,
    tooltip: {},
  }
);

// define eventos
const emit = defineEmits(["update:active", "change"]);

// define variaves locais
const localActiveTooltip = ref<boolean>(false)

// definir variaveis  reativas
const showHelp = ref(props.help || false);

const activeTooltip = computed<boolean>({
  get() {
    return localActiveTooltip.value
  },
  set: (value: boolean) => {
    emit("update:active", value);
    localActiveTooltip.value = value
  },
});


const showObservation = ref(false);

// do open tooltip
const openTooltip = () => {
  activeTooltip.value = true
};

</script>


<template>
  <n-popconfirm v-model:show="activeTooltip" :show-icon="false" trigger="manual">
    <template #trigger>
      <div class="inline-flex items-center">
        <slot></slot>
        <i-fluent-info-24-regular class="cursor-pointer" @click="activeTooltip = true" v-if="message"/>
      </div>
    </template>
    <div>
       <div data-test="message" >{{ message }}</div>
       <div data-test="observation" v-if="observation">{{ observation }}</div>
    </div>
    <template #action>
      <i-fluent-checkbox-checked-16-regular class="cursor-pointer" @click="activeTooltip = false"/>
    </template>
  </n-popconfirm>
</template>