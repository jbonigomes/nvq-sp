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
import Section from '/src/components/Section'

import { getData } from '/src/store/data'
import { getProfile } from '/src/store/profile'

export default () => {
  const navigate = useNavigate()

  const [modules, setModules] = React.useState([])

  React.useEffect(() => {
    const init = async () => {
      const profileStore = await getProfile()

      if (profileStore?.course && profileStore?.level) {
        const { modules } = await getData(profileStore)
        setModules(Object.keys(modules))
      } else {
        navigate('/welcome')
      }
    }

    init()
  }, [])

  return (
    <Container>
      <Header>
        <Logo small />
        <H1 className="text-center mb-2">Modules</H1>
      </Header>
      <Main>
        <List>
          {modules.map((module) => (
            <ListItem key={module} label={module} path="modules" />
          ))}
        </List>
      </Main>
      <Navigation active="modules" />
    </Container>
  )
}
