import React from 'react'

import Empty from '/src/components/Empty'
import Fab from '/src/components/Fab'
import Main from '/src/components/Main'
import Section from '/src/components/Section'

import { updateEvidence } from '/src/store/data'

export default ({ evidence }) => {
  // TODO: ...

  return (
    <Main withFab>
      <Empty />
      {/*
      <Section>
        Gallery
      </Section>
      */}
      <Fab isCamera />
    </Main>
  )
}
