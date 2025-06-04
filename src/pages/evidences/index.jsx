import React from 'react'

import { useNavigate } from 'react-router'

import Container from '/src/components/Container'
import Drawer from '/src/components/Drawer'
import DrawerItem from '/src/components/DrawerItem'
import H1 from '/src/components/H1'
import Logo from '/src/components/Logo'
import Navigation from '/src/components/Navigation'
import Section from '/src/components/Section'

import { getData } from '/src/store/data'
import { getProfile } from '/src/store/profile'

export default () => {
  const navigate = useNavigate()

  const [evidences, setEvidences] = React.useState([])

  React.useEffect(() => {
    const init = async () => {
      const profileStore = await getProfile()

      if (profileStore?.course && profileStore?.level) {
        const { evidences } = await getData(profileStore)
        setEvidences(evidences)
      } else {
        navigate('/welcome')
      }
    }

    init()
  }, [])

  return (
    <Container>
      <Section className="fixed top-0 left-0 right-0 pt-safe-area-inset-top">
        <Logo />
        <H1 className="text-center mt-3">Evidences</H1>
      </Section>
      <Drawer>
        {evidences.map(({ id }) => (
          <DrawerItem key={id} label={id} path="evidences" />
        ))}
      </Drawer>
      <Navigation active="evidences" />
    </Container>
  )
}
