import React from 'react'

import { Link, useNavigate } from 'react-router'

import Button from '/src/components/Button'
import Container from '/src/components/Container'
import H1 from '/src/components/H1'
import H2 from '/src/components/H2'
import Input from '/src/components/Input'
import Logo from '/src/components/Logo'
import Modal from '/src/components/Modal'
import Navigation from '/src/components/Navigation'
import Section from '/src/components/Section'

import { getData } from '/src/store/data'
import { getProfile, resetProfile, setProfileName } from '/src/store/profile'
import { isNameValid } from '/src/utils/validators'

export default () => {
  const navigate = useNavigate()

  const [error, setError] = React.useState('')
  const [profile, setProfile] = React.useState()
  const [showModal, setShowModal] = React.useState(false)

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

  const onModalOpen = () => {
    setShowModal(true)
  }

  const onModalClose = (action) => async () => {
    setShowModal(false)

    if (action) {
      await resetProfile()
      navigate('/welcome')
    }
  }

  React.useEffect(() => {
    const init = async () => {
      const profileStore = await getProfile()

      if (profileStore?.course && profileStore?.level) {
        setProfile(profileStore)
      } else {
        navigate('/welcome')
      }
    }

    init()
  }, [])

  return (
    <Container>
      <Section>
        <Logo />
        <H1 className="text-center">{profile?.level ?? ''}</H1>
        <H2>{profile?.course ?? ''}</H2>
      </Section>
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
          label="First Aider"
          onChange={onChange}
          value={profile?.firstAider ?? ''}
        />
      </Section>
      <Section>
        <Input
          label="Location"
          onChange={onChange}
          value={profile?.location ?? ''}
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
      <Section>
        <Button onClick={onModalOpen} secondary>
          RESET
        </Button>
      </Section>
      <Navigation active="home" />
      {showModal && (
        <Modal
          action="RESET"
          onClick={onModalClose}
          text="This action will reset all your progress"
        />
      )}
    </Container>
  )
}
