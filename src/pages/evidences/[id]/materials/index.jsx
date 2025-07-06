import React from 'react'

import DeletableItem from '/src/components/DeletableItem'
import Empty from '/src/components/Empty'
import Fab from '/src/components/Fab'
import Main from '/src/components/Main'
import Section from '/src/components/Section'

import { updateEvidence } from '/src/store/data'

export default ({ evidence }) => {
  const [materials, setMaterials] = React.useState(evidence.materials)

  const onAdd = () => {
    setMaterials([...materials, { id: Date.now(), text: '' }])
  }

  const onChange = (id) => ({ target }) => {
    setMaterials(materials.map((material) => id === material.id ? { ...material, text: target.value } : material))
  }

  const onBlur = () => {
    // TODO: validation?
    updateEvidence(
      evidence.id,
      'materials',
      materials.map((material) => ({
        ...material,
        text: material.text.trim(),
      })).filter(({ text }) => text)
    )
  }

  const onDelete = (id) => () => {
    setMaterials(materials.filter((material) => material.id !== id))
  }

  return (
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
  )
}
