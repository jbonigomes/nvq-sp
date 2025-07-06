import React from 'react'

import DeletableItem from '/src/components/DeletableItem'
import Empty from '/src/components/Empty'
import Fab from '/src/components/Fab'
import Main from '/src/components/Main'
import Section from '/src/components/Section'

import { updateEvidence } from '/src/store/data'

export default ({ evidence }) => {
  const [tools, setTools] = React.useState(evidence.tools)

  const onAdd = () => {
    setTools([...tools, { id: Date.now(), text: '' }])
  }

  const onChange = (id) => ({ target }) => {
    setTools(tools.map((tool) => id === tool.id ? { ...tool, text: target.value } : tool))
  }

  const onBlur = () => {
    // TODO: validation?
    updateEvidence(
      evidence.id,
      'tools',
      tools.map((tool) => ({
        ...tool,
        text: tool.text.trim(),
      })).filter(({ text }) => text)
    )
  }

  const onDelete = (id) => () => {
    setTools(tools.filter((tool) => tool.id !== id))
  }

  return (
    <Main className="mt-17" withFab>
      {!tools.length ? (
        <Empty />
      ) : (
        <Section>
          {tools.map((tool) => (
            <React.Fragment key={tool.id}>
              <DeletableItem
                text={tool.text}
                onBlur={onBlur}
                onChange={onChange(tool.id)}
                onDelete={onDelete(tool.id)}
              />
            </React.Fragment>
          ))}
        </Section>
      )}
      <Fab onClick={onAdd} />
    </Main>
  )
}
