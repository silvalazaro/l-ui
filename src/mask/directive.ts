import {create as createMask } from 'maska'
import { VNode } from 'vue'

export const vMask = {
  created: (el: HTMLElement, binding: VNode) => {
    createMask(el.querySelector('input'), {
      mask: binding.value
    });
  },
  updated: (el: HTMLElement, binding: VNode) => {
  },
}