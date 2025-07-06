import React from 'react'

import { useNavigate } from 'react-router'

import Container from '/src/components/Container'
import Empty from '/src/components/Empty'
import EvidenceModal from '/src/components/EvidenceModal'
import Fab from '/src/components/Fab'
import H1 from '/src/components/H1'
import Header from '/src/components/Header'
import List from '/src/components/List'
import ListItem from '/src/components/ListItem'
import Logo from '/src/components/Logo'
import Main from '/src/components/Main'
import Navigation from '/src/components/Navigation'

import { getData, addEvidence } from '/src/store/data'
import { getProfile } from '/src/store/profile'
import { isNameValid } from '/src/utils/validators'

export default () => {
  const navigate = useNavigate()

  const [profile, setProfile] = React.useState({})
  const [evidences, setEvidences] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

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
      setEvidences((await getData()).evidences)
      setProfile(await getProfile())
      setIsLoading(false)
    }

    init()
  }, [])

  return (
    <>
      {!isLoading && (
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
            <EvidenceModal
              value={title}
              onSave={onSave}
              onCancel={onHide}
              error={titleError}
              title="New Evidence"
              onChange={onTitleChange}
            />
          )}
        </Container>
      )}
    </>
  )
}
