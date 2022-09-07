import { mount } from '@vue/test-utils'
import { InputText } from '../index'
import { describe, expect, it, test } from 'vitest'
import { ref } from 'vue'

describe('InputText test', () => {
  let name = '10203040'
  const label = 'Your name'
  const mask = '(##).##.##'
  const wrapper =  mount(InputText, {
      props: {
        modelValue: name,
        label: label,
        mask: mask
      }
    })

  test('label is show', () => {
    expect(wrapper.props('label')).toBe(label)
    expect(wrapper.text()).toBe(label)
  })

  test('test with mask', () => {
    const input = wrapper.find('input')
    expect(wrapper.props('mask')).toBe(mask)
    expect(input.attributes('data-mask')).toBe(mask)
    expect(input.element.value).toBe('(10).20.30')
  })

})