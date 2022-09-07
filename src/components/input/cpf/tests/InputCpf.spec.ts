import { mount } from '@vue/test-utils'
import { InputCpf } from '../index'
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'


describe('InputCpf test', () => {
  const wrapper =  mount(InputCpf, {
      props: {
        modelValue: '10'
      }
    })

  it('default label is show', async () => {
    expect(wrapper.props('label')).toBe('CPF')
    await wrapper.setProps({label: 'Employee CPF'})
    wrapper.vm.$nextTick()
    expect(wrapper.props('label')).toBe('Employee CPF')
  })

  it('cpf is invalid', () => {
    expect(wrapper.find('[class="text-left"]').text()).toBe('CPF inválido')
  })

  it('cpf is valid', async () => {
    await wrapper.find('input').setValue('40208435034')
    await wrapper.vm.$nextTick()
    // cpf with mask
    expect(wrapper.find('input').element.value).toBe('402.084.350-34')
    // error validation empty
    expect(wrapper.find('[class="text-left"]').text()).toBe('')
  })

})