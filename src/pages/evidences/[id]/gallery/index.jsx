import React from 'react'
import { useParams } from 'react-router'

import Container from '/src/components/Container'
import Fab from '/src/components/Fab'
import Header from '/src/components/Header'
import Main from '/src/components/Main'
import Section from '/src/components/Section'
import Subnav from '/src/components/Subnav'

import { getData } from '/src/store/data'

export default () => {
  const { id } = useParams()

  const [evidence, setEvidence] = React.useState({})

  const onDownload = () => {
    // TODO: should abstract this
  }

  React.useEffect(() => {
    const init = async () => {
      const { evidences } = await getData()
      setEvidence(evidences?.find?.((e) => e.id === id))
    }

    init()
  }, [])

  return (
    <Container>
      <Header backTo="/evidences" onClick={onDownload}>
        {evidence.title}
      </Header>
      <Main withFab>
        <Section>
          Gallery
        </Section>
        <Fab isCamera />
      </Main>
      <Subnav id={id} active="gallery" />
    </Container>
  )
}
