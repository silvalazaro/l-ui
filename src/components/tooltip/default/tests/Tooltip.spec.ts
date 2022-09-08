import { mount } from '@vue/test-utils'
import { Tooltip } from '../index'
import { describe, expect, it } from 'vitest'
import { nextTick, ref } from 'vue'


describe('Tooltip.spec test', () => {
  const message = 'This is test message'
  const wrapper = mount(Tooltip, {
    props: {
      message: message
    },
    slots: {
      default: 'Default'
    },
    attachTo: document.body
  })

  const wrapper2 = mount(Tooltip, {
    props: {
      message: ""
    },
    slots: {
      default: 'Default'
    },
    attachTo: document.body
  })

  const span = wrapper.find('span')

  it('closed tooltip', async () => {
    expect(document.querySelector('.n-tooltip')).toEqual(null)
  })

  it('open tooltip after click', async () => {
    await span.trigger('mouseenter')
    await new Promise(r => setTimeout(r, 100));
    expect(document.querySelector('.n-tooltip')).not.toEqual(null)
    await span.trigger('mouseleave')
  })
  it('disabled by null message', async () => {
    await wrapper2.find('span').trigger('mouseenter')
    await new Promise(r => setTimeout(r, 100));
    expect(document.querySelector('.n-tooltip')).toEqual(null)
  })

})