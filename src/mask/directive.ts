import {create as createMask } from 'maska'
import { VNode } from 'vue'

export const vMask = {
  created: (el: HTMLElement, binding: VNode) => {
    binding.value.mask = '#-##-##'
    createMask(el.querySelector('input'), {
      mask: binding.value.mask
    });
  },
  updated: (el: HTMLElement, binding: VNode) => {
    console.log(binding.value)
  },
}