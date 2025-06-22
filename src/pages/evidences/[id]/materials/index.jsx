import React from 'react'
import { useParams } from 'react-router'

import Container from '/src/components/Container'
import DeletableItem from '/src/components/DeletableItem'
import Empty from '/src/components/Empty'
import Fab from '/src/components/Fab'
import Header from '/src/components/Header'
import Main from '/src/components/Main'
import Section from '/src/components/Section'
import Subnav from '/src/components/Subnav'

import { getData, updateEvidence } from '/src/store/data'

export default () => {
  const { id } = useParams()

  const [title, setTitle] = React.useState('')
  const [materials, setMaterials] = React.useState([])

  const onDownload = () => {
    // TODO: should abstract this
  }

  const onAdd = () => {
    setMaterials([...materials, { id: Date.now(), text: '' }])
  }

  const onChange = (idx) => ({ target }) => {
    setMaterials(materials.map((material) => idx === material.id ? { ...material, text: target.value } : material))
  }

  const onBlur = () => {
    // TODO: validation?
    updateEvidence(
      id,
      'materials',
      materials.map((material) => ({
        ...material,
        text: material.text.trim(),
      })).filter(({ text }) => text)
    )
  }

  const onDelete = (idx) => () => {
    setMaterials(materials.filter((material) => material.id !== idx))
  }

  React.useEffect(() => {
    const init = async () => {
      const { evidences } = await getData()
      const evidence = evidences?.find?.((e) => e.id === id)

      setTitle(evidence.title ?? '')
      setMaterials(evidence.materials ?? [])
    }

    init()
  }, [])

  return (
    <Container>
      <Header backTo="/evidences" onClick={onDownload}>
        {title}
      </Header>
      <Main className="mt-17" withFab>
        {!materials.length ? (
          <Empty />
        ) : (
          <Section>
            {materials.map((material) => (
              <React.Fragment key={material.id}>
                <DeletableItem
                  text={material.text}
                  onBlur={onBlur}
                  onChange={onChange(material.id)}
                  onDelete={onDelete(material.id)}
                />
              </React.Fragment>
            ))}
          </Section>
        )}
        <Fab onClick={onAdd} />
      </Main>
      <Subnav id={id} active="materials" />
    </Container>
  )
}
