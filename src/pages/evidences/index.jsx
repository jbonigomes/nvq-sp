import React from 'react'

import { useNavigate } from 'react-router'

import Container from '/src/components/Container'
import H1 from '/src/components/H1'
import Header from '/src/components/Header'
import List from '/src/components/List'
import ListItem from '/src/components/ListItem'
import Logo from '/src/components/Logo'
import Main from '/src/components/Main'
import Navigation from '/src/components/Navigation'

import { getData } from '/src/store/data'
import { getProfile } from '/src/store/profile'

export default () => {
  const navigate = useNavigate()

  const [evidences, setEvidences] = React.useState([])

  React.useEffect(() => {
    const init = async () => {
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
      <Main>
        {evidences.length ? (
          <List>
            {evidences.map(({ id }) => (
              <ListItem key={id} label={id} path="evidences" />
            ))}
          </List>
        ) : (
          <button>Create first evidence</button>
        )}
      </Main>
      <Navigation active="evidences" />
    </Container>
  )
}
