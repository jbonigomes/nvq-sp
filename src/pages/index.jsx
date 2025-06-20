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
import { getProfile, setProfileName, setProfileInstructor, setProfileSchool } from '/src/store/profile'
import { isNameValid } from '/src/utils/validators'

export default () => {
  const navigate = useNavigate()

  const [name, setName] = React.useState('')
  const [school, setSchool] = React.useState('')
  const [instructor, setInstructor] = React.useState('')

  const [nameError, setNameError] = React.useState('')
  const [schoolError, setSchoolError] = React.useState('')
  const [instructorError, setInstructorError] = React.useState('')

  const onChangeName = async ({ target }) => {
    setNameError('')
    setName(target.value)
  }

  const onChangeSchool = async ({ target }) => {
    setSchoolError('')
    setSchool(target.value)
  }

  const onChangeInstructor = async ({ target }) => {
    setInstructorError('')
    setInstructor(target.value)
  }

  const onBlurName = async () => {
    if (isNameValid(name)) {
      await setProfileName(name)
    } else {
      setNameError('You must enter a valid name')
    }
  }

  const onBlurSchool = async () => {
    if (isNameValid(school)) {
      await setProfileSchool(school)
    } else {
      setSchoolError('You must enter a valid school')
    }
  }

  const onBlurInstructor = async () => {
    if (isNameValid(instructor)) {
      await setProfileInstructor(instructor)
    } else {
      setInstructorError('You must enter a valid instructor')
    }
  }

  React.useEffect(() => {
    const init = async () => {
      const profile = await getProfile()

      setName(profile?.name ?? '')
      setSchool(profile?.school ?? '')
      setInstructor(profile?.instructor ?? '')
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
              value={name}
              error={nameError}
              onBlur={onBlurName}
              onChange={onChangeName}
            />
          </Section>
          <Section>
            <Input
              label="School"
              value={school}
              error={schoolError}
              onBlur={onBlurSchool}
              onChange={onChangeSchool}
            />
          </Section>
          <Section>
            <Input
              label="Instructor"
              value={instructor}
              error={instructorError}
              onBlur={onBlurInstructor}
              onChange={onChangeInstructor}
            />
          </Section>
        </Main>
        <Navigation active="home" />
      </Container>
    </>
  )
}
