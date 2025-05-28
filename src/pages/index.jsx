import React from 'react'

import { Link, useNavigate } from 'react-router'

import Button from '/src/components/Button'
import Container from '/src/components/Container'
import H1 from '/src/components/H1'
import H2 from '/src/components/H2'
import Input from '/src/components/Input'
import Modal from '/src/components/Modal'
import Navigation from '/src/components/Navigation'
import Progress from '/src/components/Progress'
import Section from '/src/components/Section'

import { getData } from '/src/store/data'
import { getProfile, resetProfile, setProfileName } from '/src/store/profile'
import { calculateTotalProgress } from '/src/utils/calculatedFields'
import { isNameValid } from '/src/utils/validators'

export default () => {
  const navigate = useNavigate()

  const [error, setError] = React.useState('')
  const [profile, setProfile] = React.useState()
  const [progress, setProgress] = React.useState(0)
  const [showModal, setShowModal] = React.useState(false)

  const onChange = async ({ target }) => {
    setError('')
    setProfile({ ...profile, name: target.value })
  }

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
        const dataStore = await getData(profileStore)

        setProfile(profileStore)
        setProgress(calculateTotalProgress(dataStore))
      } else {
        navigate('/welcome')
      }
    }

    init()
  }, [setProfile, setProgress])

  return (
    <Container>
      <Section>
        <Progress progress={progress} />
      </Section>
      <Section>
        <H1 className="text-center">{profile?.level ?? ''}</H1>
        <H2>{profile?.course ?? ''}</H2>
      </Section>
      <Section>
        <Input
          label="Name"
          error={error}
          onBlur={onBlur}
          onChange={onChange}
          value={profile?.name ?? ''}
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
