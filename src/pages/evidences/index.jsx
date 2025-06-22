import React from 'react'

import { useNavigate } from 'react-router'

import Button from '/src/components/Button'
import Container from '/src/components/Container'
import Empty from '/src/components/Empty'
import Fab from '/src/components/Fab'
import Group from '/src/components/Group'
import H1 from '/src/components/H1'
import H3 from '/src/components/H3'
import Header from '/src/components/Header'
import Input from '/src/components/Input'
import List from '/src/components/List'
import ListItem from '/src/components/ListItem'
import Logo from '/src/components/Logo'
import Modal from '/src/components/Modal'
import Main from '/src/components/Main'
import Navigation from '/src/components/Navigation'
import Section from '/src/components/Section'

import { getData, addEvidence } from '/src/store/data'
import { getProfile } from '/src/store/profile'
import { isNameValid } from '/src/utils/validators'

export default () => {
  const navigate = useNavigate()

  const [profile, setProfile] = React.useState({})
  const [evidences, setEvidences] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)

  const [title, setTitle] = React.useState('')
  const [titleError, setTitleError] = React.useState('')

  const onShow = async () => {
    setShowModal(true)
  }

  const onHide = () => {
    setShowModal(false)
  }

  const onSave = async () => {
    if (!isNameValid(title)) {
      setTitleError('You must enter a valid title')
    } else {
      const id = await addEvidence(title)
      navigate(`/evidences/${id}`)
    }
  }

  const onTitleChange = ({ target }) => {
    setTitleError('')
    setTitle(target.value)
  }

  React.useEffect(() => {
    const init = async () => {
      setProfile(await getProfile())
      setEvidences((await getData()).evidences)
    }

    init()
  }, [])

  return (
    <Container>
      <Header>
        <Logo small />
        <H1 className="text-center mb-2">Evidences</H1>
      </Header>
      <Main withFab>
        {!evidences.length ? (
          <Empty />
        ) : (
          <List>
            {evidences.map(({ id, title }) => (
              <ListItem key={id} label={title} path={`/evidences/${id}`} />
            ))}
          </List>
        )}
        <Fab onClick={onShow} />
      </Main>
      <Navigation active="evidences" />
      {showModal && (
        <Modal>
          <Section>
            <H3>New Evidence</H3>
            <Input
              label="Title"
              value={title}
              error={titleError}
              onChange={onTitleChange}
            />
          </Section>
          <Group>
            <Button small secondary onClick={onHide}>CANCEL</Button>
            <Button small onClick={onSave}>SAVE</Button>
          </Group>
        </Modal>
      )}
    </Container>
  )
}
