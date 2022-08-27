import { mount } from '@vue/test-utils'
import { LuButtonInfo } from '../index'
import { describe, expect, it } from 'vitest'
import { nextTick, ref } from 'vue'


describe('ButtonInfo.spec test', () => {
  const message = 'This is test message'
  const wrapper = mount(LuButtonInfo, {
    props: {
      message: message
    },
    attachTo: document.body
  })

  it('closed tooltip', async () => {
    expect(document.getElementsByClassName('n-popover').length).toBe(0)
  })

  it('open tooltip after click', async () => {
    await wrapper.find('svg').trigger('click')
    expect(document.getElementsByClassName('n-popover').length).toBe(1)
  })
  
  it('show message', async () => {
    expect(document.querySelectorAll("[data-test='message']")[0].innerHTML).toBe(message)
  })

  it('observation is hidden', async () => {
    expect(document.querySelectorAll("[data-test='observation']").length).toBe(0)
  })
  
  it('observation is show', async () => {
    wrapper.setProps({
      observation: 'Test of observation'
    })
    await nextTick()
    expect(document.querySelectorAll("[data-test='observation']")[0].innerHTML).toBe('Test of observation')
  })


})