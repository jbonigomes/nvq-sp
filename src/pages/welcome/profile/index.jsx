import React from 'react'

import { useNavigate } from 'react-router'

import Button from '/src/components/Button'
import Container from '/src/components/Container'
import Footer from '/src/components/Footer'
import H1 from '/src/components/H1'
import Input from '/src/components/Input'
import Section from '/src/components/Section'
import Steps from '/src/components/Steps'

import {
  getProfile,
  setProfileName,
  setProfileEmail,
  setProfileLocation,
  setProfileFirstAider,
} from '/src/store/profile'
import { isNameValid, isEmailValid } from '/src/utils/validators'

export default () => {
  const navigate = useNavigate()

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [firstAider, setFirstAider] = React.useState('')

  const [nameError, setNameError] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [locationError, setLocationError] = React.useState('')
  const [firstAiderError, setFirstAiderError] = React.useState('')

  const onChangeName = ({ target }) => {
    setNameError('')
    setName(target.value)
  }

  const onChangeEmail = ({ target }) => {
    setEmailError('')
    setEmail(target.value)
  }

  const onChangeLocation = ({ target }) => {
    setLocationError('')
    setLocation(target.value)
  }

  const onChangeFirstAider = ({ target }) => {
    setFirstAiderError('')
    setFirstAider(target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const isFormValid = [
      isNameValid(name),
      isEmailValid(email),
      isEmailValid(location),
      isNameValid(firstAider),
    ].every(Boolean)

    if (!isNameValid(name)) {
      setNameError('You must enter a valid name')
    }

    if (!isEmailValid(email)) {
      setEmailError('You must enter a valid email')
    }

    if (!isNameValid(location)) {
      setLocationError('You must enter a valid location')
    }

    if (!isNameValid(firstAider)) {
      setFirstAiderError('You must enter a valid first aider name')
    }

    if (isFormValid) {
      await setProfileName(name)
      await setProfileEmail(email)
      await setProfileLocation(location)
      await setProfileFirstAider(firstAider)

      navigate('/welcome/course')
    }
  }

  React.useEffect(() => {
    const init = async () => {
      const profile = await getProfile()
      setName(name || profile?.name || '')
      setEmail(email || profile?.email || '')
      setLocation(location || profile?.location || '')
      setFirstAider(firstAider || profile?.firstAider || '')
    }

    init()
  }, [])

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Section>
          <Steps step={1} />
        </Section>
        <Section>
          <H1>Your Details</H1>
        </Section>
        <Section>
          <Input
            label="Name"
            value={name}
            error={nameError}
            onChange={onChangeName}
          />
        </Section>
        <Section>
          <Input
            label="Email"
            value={email}
            error={emailError}
            onChange={onChangeEmail}
          />
        </Section>
        <Section>
          <Input
            label="Location"
            value={location}
            error={locationError}
            onChange={onChangeLocation}
          />
        </Section>
        <Section>
          <Input
            label="First Aider"
            value={firstAider}
            error={firstAiderError}
            onChange={onChangeFirstAider}
          />
        </Section>
        <Footer>
          <Button type="submit" secondary>
            NEXT
          </Button>
        </Footer>
      </form>
    </Container>
  )
}
