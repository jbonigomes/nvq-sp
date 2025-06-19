import React from 'react'

import { Link, useNavigate } from 'react-router'

import Button from '/src/components/Button'
import Container from '/src/components/Container'
import H1 from '/src/components/H1'
import H2 from '/src/components/H2'
import Header from '/src/components/Header'
import Input from '/src/components/Input'
import Logo from '/src/components/Logo'
import Main from '/src/components/Main'
import Navigation from '/src/components/Navigation'
import Section from '/src/components/Section'

import { getData } from '/src/store/data'
import { getProfile, setProfileName } from '/src/store/profile'
import { isNameValid } from '/src/utils/validators'

export default () => {
  const navigate = useNavigate()

  // TODO: we need to handle each field individually
  const [error, setError] = React.useState('')
  const [profile, setProfile] = React.useState()

  const onChange = async ({ target }) => {
    // TODO: we need to handle each field individually
  }

  // TODO: we need to handle each field individually
  const onBlur = async () => {
    if (isNameValid(profile?.name)) {
      await setProfileName(profile?.name ?? '')
    } else {
      setError('You must enter a valid name')
    }
  }

  React.useEffect(() => {
    const init = async () => {
      setProfile(await getProfile())
    }

    init()
  }, [])

  return (
    <>
      <Container>
        <Header>
          <Logo />
          <H1 className="text-center">NVQ Level 3</H1>
          <H2>Installation & Commissioning</H2>
        </Header>
        <Main>
          <Section>
            <Input
              label="Name"
              onChange={onChange}
              value={profile?.name ?? ''}
            />
          </Section>
          <Section>
            <Input
              label="Email"
              onChange={onChange}
              value={profile?.email ?? ''}
            />
          </Section>
          <Section>
            <Input
              label="School"
              onChange={onChange}
              value={profile?.school ?? ''}
            />
          </Section>
          <Section>
            <Input
              label="Instructor"
              onChange={onChange}
              value={profile?.instructor ?? ''}
            />
          </Section>
        </Main>
        <Navigation active="home" />
      </Container>
    </>
  )
}
