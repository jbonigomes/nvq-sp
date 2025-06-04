import React from 'react'
import { useParams } from 'react-router'

import Container from '/src/components/Container'
import Header from '/src/components/Header'
import Main from '/src/components/Main'
import Section from '/src/components/Section'
import Subnav from '/src/components/Subnav'

export default () => {
  const { id } = useParams()

  const onDownload = () => {
    // TODO: should abstract this
  }

  return (
    <Container>
      <Header backTo="/evidences" onClick={onDownload}>
        {id} Gallery
      </Header>
      <Main>
        <Section>
          Gallery
        </Section>
      </Main>
      <Subnav id={id} active="gallery" />
    </Container>
  )
}
