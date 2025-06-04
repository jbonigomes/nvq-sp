import React from 'react'
import { useParams } from 'react-router'

import Container from '/src/components/Container'
import Header from '/src/components/Header'
import Section from '/src/components/Section'
import Subnav from '/src/components/Subnav'

export default () => {
  const { id } = useParams()

  const onDownload = () => {
    // TODO: should abstract this
  }

  return (
    <>
      <Header backTo="/evidences" onClick={onDownload}>
        {id} Tools
      </Header>
      <Container className="mt-17">
        <Section>
          Tools
        </Section>
      </Container>
      <Subnav id={id} active="tools" />
    </>
  )
}
