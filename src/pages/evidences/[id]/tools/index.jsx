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
  const [tools, setTools] = React.useState([])

  const onDownload = () => {
    // TODO: should abstract this
  }

  const onAdd = () => {
    setTools([...tools, { id: Date.now(), text: '' }])
  }

  const onChange = (idx) => ({ target }) => {
    setTools(tools.map((tool) => idx === tool.id ? { ...tool, text: target.value } : tool))
  }

  const onBlur = () => {
    // TODO: validation?
    updateEvidence(
      id,
      'tools',
      tools.map((tool) => ({
        ...tool,
        text: tool.text.trim(),
      })).filter(({ text }) => text)
    )
  }

  const onDelete = (idx) => () => {
    setTools(tools.filter((tool) => tool.id !== idx))
  }

  React.useEffect(() => {
    const init = async () => {
      const { evidences } = await getData()
      const evidence = evidences?.find?.((e) => e.id === id)

      setTitle(evidence.title ?? '')
      setTools(evidence.tools ?? [])
    }

    init()
  }, [])

  return (
    <Container>
      <Header backTo="/evidences" onClick={onDownload}>
        {title}
      </Header>
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
      <Subnav id={id} active="tools" />
    </Container>
  )
}
