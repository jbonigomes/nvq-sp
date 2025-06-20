import React from 'react'

import { useNavigate } from 'react-router'

import Container from '/src/components/Container'
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

export default () => {
  const navigate = useNavigate()

  const [profile, setProfile] = React.useState({})
  const [evidences, setEvidences] = React.useState([])

  const onAddEvidence = async () => {
    const id = await addEvidence(profile)
    navigate(`/evidences/${id}`)
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
        {!!evidences.length && (
          <List>
            {evidences.map(({ id, title }) => (
              <ListItem key={id} label={title} path={`/evidences/${id}`} />
            ))}
          </List>
        )}
        <Fab onClick={onAddEvidence} />
      </Main>
      <Navigation active="evidences" />
    </Container>
  )
}
