import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'

import { Tree } from '../../../src/components/Tree'
import { ClassicLink } from '../../../src/components/Tree/ClassicLink'
import { ShowLink } from '../../../src/components/Tree/ShowLink'
import { LinkType } from '../../../src/components/Tree/types'

//TODO
// When I test things, I typically like to break
// down their permutations into separate `describe` blocks
// I then break down their setup in to `beforeEach` blocks
// I prefer to leave the `it` clause as a single `expect` statement
// Using this approach, there is no question what a tests needs
// in order to be setup, or what is under test

describe('Tree', () => {
  let result,
      links

  const subject = (links) => (
    mount(
      <Tree links={links} />
    )
  )

  describe('when provided with a classic link', () => {
    beforeEach(() => {
      links = [{
        type: LinkType.classic
      }]

      result = subject(links)
    })

    it('displays a classic link', () => {
      expect(result.find(ClassicLink)).to.not.be.empty
    })
  })

  describe('when provided with a show link', () => {
    beforeEach(() => {
      links = [{
        type: LinkType.show
      }]

      result = subject(links)
    })

    it('displays a song link', () => {
      expect(result.find(ShowLink)).to.not.be.empty
    })
  })
})
