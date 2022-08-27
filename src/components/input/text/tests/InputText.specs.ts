import { mount } from '@vue/test-utils'
import { LuInputText } from '../index'
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'


describe('InputCnpj test', () => {
  const wrapper = mount(LuInputText, {
    props: {
      modelValue:'103040',
      label: 'teste',
      mask: '#'
    }
  })
  
  it('renders a greeting', () => {
    console.log('lazaro francisco')
  })
})