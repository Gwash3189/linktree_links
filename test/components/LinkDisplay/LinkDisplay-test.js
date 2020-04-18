import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { LinkDisplay } from '../../../src/components/LinkDisplay'

describe('LinkDisplay', () => {
  let result,
      value

  beforeEach(() => {
    value = 'some text'
    result = shallow(
      <LinkDisplay>
        {value}
      </LinkDisplay>
    )
  })

  it('displays it\'s children', () => {
    expect(result).to.contain.text(value)
  })
})
