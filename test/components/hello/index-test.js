import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { Hello } from '../../../src/components/hello'

describe('Hello', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Hello name={'Adam'} />
    )
  })

  it('renders a div with the provided name', () => {
    expect(wrapper.find('div')).to.have.text('Hello, Adam')
  })
})
