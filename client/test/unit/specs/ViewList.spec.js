import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ViewList from '@/components/ViewList'

const wrapper = shallowMount(ViewList)

describe('ViewList.vue', () => {
  it('Show pagination is working', () => {
    wrapper.find('#count_tickets')
    expect(wrapper.find('#count_tickets').text()).contains('Total Tickets')
  })
})
