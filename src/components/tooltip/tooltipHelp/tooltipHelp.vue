<template>
  <el-tooltip v-bind="tooltip" v-model:visible="showHelp">
    <template #content>
       <div class="grid place-items-center" v-if="tooltip.placement !== 'top'">
        <el-button
          type="primary"
          size="small"
          circle
          @click="(showHelp = false), (showObservation = false)"
        >
          <ep-check
        /></el-button>
      </div>
      <div class="grid place-items-center">
        {{ message }}
      </div>
      <div v-if="showObservation && observation">{{ observation }}</div>
      <div class="grid place-items-center" v-if="tooltip.placement === 'top'">
        <el-button
          type="primary"
          size="small"
          circle
          @click="(showHelp = false), (showObservation = false)"
        >
          <ep-check
        /></el-button>
      </div>
    </template>
    <div class="align-bottom">
      <slot></slot>
      <button>
        <el-icon class="self-end" @click="doShowHelp"
          ><ep-question-filled
        /></el-icon>
      </button>
    </div>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { watch } from "vue";
import _ from "lodash";

interface Props {
  message: string;
  observation?: string;
  help?: boolean;
  tooltip: any;
}

const props = withDefaults(defineProps<Props>(), {
  help: false,
  tooltip: {},
});

const showHelp = ref(props.help || false);

const showObservation = ref(false);

const doShowHelp = () => {
  showObservation.value = true;
  showHelp.value = true;
};

watch(
  () => props.help,
  (value) => {
    showHelp.value = !!value;
  }
);
</script>
